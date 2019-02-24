import cdk = require("@aws-cdk/cdk");
import s3 = require("@aws-cdk/aws-s3");
import cloudfront = require("@aws-cdk/aws-cloudfront");

interface DistributionProps {
  name: string;
  domainNames: string[];
  certificateArn: string;
}

export default class Distribution extends cdk.Construct {
  public readonly distribution: cloudfront.CloudFrontWebDistribution;
  public readonly bucket: s3.Bucket;

  constructor(parent: cdk.Construct, name: string, props: DistributionProps) {
    super(parent, name);

    const bucket = new s3.Bucket(this, `${props.name}Bucket`, {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      removalPolicy: cdk.RemovalPolicy.Orphan
    });

    this.bucket = bucket;

    const originId = new cloudfront.CfnCloudFrontOriginAccessIdentity(
      this,
      `${props.name}OriginAccessIdentity`,
      {
        cloudFrontOriginAccessIdentityConfig: {
          comment:
            "A comment to associate with this CloudFront origin access identity"
        }
      }
    );

    this.distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `${props.name}Distribution`,
      {
        aliasConfiguration: {
          names: props.domainNames,
          acmCertRef: props.certificateArn // Needs to be created manually right now, but there's a PR to automate it https://github.com/awslabs/aws-cdk/pull/1797
        },
        defaultRootObject: "index.html",
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPSOnly,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: originId
            },
            behaviors: [{ isDefaultBehavior: true }]
          }
        ]
      }
    );
  }
}
