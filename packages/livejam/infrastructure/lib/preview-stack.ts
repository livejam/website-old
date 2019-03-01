import cdk = require("@aws-cdk/cdk");
import s3 = require("@aws-cdk/aws-s3");
import s3deploy = require("@aws-cdk/aws-s3-deployment");
import path = require("path");

interface PreviewStackProps {
  bucket: s3.Bucket;
  branchName: string;
  env: cdk.Environment;
}

export class PreviewStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: PreviewStackProps) {
    super(scope, id);

    new s3deploy.BucketDeployment(this, "LivejamWebsiteDeployment", {
      source: s3deploy.Source.asset(path.join(__dirname, "../../public")),
      destinationBucket: props.bucket,
      destinationKeyPrefix: props.branchName
    });
  }
}
