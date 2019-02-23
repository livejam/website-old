import cdk = require("@aws-cdk/cdk");
import s3 = require("@aws-cdk/aws-s3");
import s3deploy = require("@aws-cdk/aws-s3-deployment");
import path = require("path");

interface InfrastructureStackProps {
  branchName: string;
}

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: InfrastructureStackProps) {
    super(scope, id);

    const websiteBucket = new s3.Bucket(this, "LivejamWebsite", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      removalPolicy: cdk.RemovalPolicy.Orphan
    });

    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      source: s3deploy.Source.asset(path.join(__dirname, "../../public")),
      destinationBucket: websiteBucket
    });

    console.log(props.branchName);

    new cdk.Output(this, "LivejamWebsiteUrl", {
      value: websiteBucket.bucketWebsiteUrl
    });
  }
}
