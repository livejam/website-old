import cdk = require("@aws-cdk/cdk");
import s3 = require("@aws-cdk/aws-s3");
import cloudfront = require("@aws-cdk/aws-cloudfront");

interface DistributionProps {
  name: string;
  domainNames: string[];
  certificateArn: string;
  redirectTo: string;
}

export default class RedirectDistribution extends cdk.Construct {
  public readonly distribution: cloudfront.CloudFrontWebDistribution;
  public readonly bucket: s3.Bucket;

  constructor(parent: cdk.Construct, name: string, props: DistributionProps) {
    super(parent, name);

    const bucket = new s3.Bucket(this, `${props.name}Bucket`, {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.Orphan
    });

    const bucketResource = bucket.node.findChild("Resource") as s3.CfnBucket;
    bucketResource.propertyOverrides.websiteConfiguration = {
      redirectAllRequestsTo: {
        hostName: props.redirectTo,
        protocol: "https"
      }
    };

    this.bucket = bucket;

    this.distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `${props.name}Distribution`,
      {
        aliasConfiguration: {
          names: props.domainNames,
          acmCertRef: props.certificateArn // Needs to be created manually right now, but there's a PR to automate it https://github.com/awslabs/aws-cdk/pull/1797
        },
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.AllowAll, // There's a bug - it's always redirect-to-https right now https://github.com/awslabs/aws-cdk/pull/1932
        priceClass: cloudfront.PriceClass.PriceClass200,
        defaultRootObject: "",
        originConfigs: [
          {
            customOriginSource: {
              originProtocolPolicy: cloudfront.OriginProtocolPolicy.HttpOnly,
              domainName: `${bucket.bucketName}.s3-website.${
                new cdk.ScopedAws(this).region
              }.amazonaws.com`
            },
            behaviors: [{ isDefaultBehavior: true }]
          }
        ]
      }
    );
  }
}
