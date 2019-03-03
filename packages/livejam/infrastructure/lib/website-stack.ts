import cdk = require("@aws-cdk/cdk");
import route53 = require("@aws-cdk/aws-route53");

import Distribution from "./constructs/distribution";
import RedirectDistribution from "./constructs/redirect-distribution";

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

    const redirectDistribution = new RedirectDistribution(
      this,
      "LivejamRedirectDistribution",
      {
        name: "LivejamRedirectMain",
        domainNames: ["livejam.io"],
        certificateArn: this.node.getContext("root_naked_domain_certificate"),
        redirectTo: "www.livejam.io"
      }
    );

    new route53.AliasRecord(this, "AliasDomain", {
      recordName: "www",
      target: distribution.distribution,
      zone: mainZone
    });

    new route53.AliasRecord(this, "RedirectNakedDomain", {
      recordName: "livejam.io.",
      target: redirectDistribution.distribution,
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
