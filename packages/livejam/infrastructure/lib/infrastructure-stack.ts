import cdk = require("@aws-cdk/cdk");
import s3 = require("@aws-cdk/aws-s3");
import s3deploy = require("@aws-cdk/aws-s3-deployment");
import path = require("path");

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "LivejamWebsite", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html"
    });

    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      source: s3deploy.Source.asset(path.join(__dirname, "../../public")),
      destinationBucket: websiteBucket
    });

    new cdk.Output(this, "LivejamWebsiteUrl", {
      value: websiteBucket.bucketWebsiteUrl
    });
  }
}
