import cdk = require("@aws-cdk/cdk");
import s3deploy = require("@aws-cdk/aws-s3-deployment");
import route53 = require("@aws-cdk/aws-route53");
import path = require("path");

import Distribution from "./constructs/distribution";

interface InfrastructureStackProps {
  zoneId: string;
}

export class WebsiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: InfrastructureStackProps) {
    super(scope, id);

    const mainZone = route53.PublicHostedZone.import(this, "MainZone", {
      zoneName: "livejam.io",
      hostedZoneId: props.zoneId
    });

    const distribution = new Distribution(this, "LivejamDistribution", {
      name: "LivejamMain",
      domainNames: ["www.livejam.io"],
      certificateArn: this.node.getContext("root_domain_certificate")
    });

    new s3deploy.BucketDeployment(this, "LivejamWebsiteDeployment", {
      source: s3deploy.Source.asset(path.join(__dirname, "../../public")),
      destinationBucket: distribution.bucket
    });

    new route53.AliasRecord(this, "AliasDomain", {
      recordName: "www",
      target: distribution.distribution,
      zone: mainZone
    });

    new cdk.Output(this, "DistributionId", {
      value: distribution.distribution.distributionId
    });

    new cdk.Output(this, "BucketName", {
      value: distribution.bucket.bucketName
    });

    new cdk.Output(this, "BucketArn", {
      value: distribution.bucket.bucketArn
    });

    new cdk.Output(this, "BucketWebsiteUrl", {
      value: distribution.bucket.bucketWebsiteUrl
    });
  }
}
