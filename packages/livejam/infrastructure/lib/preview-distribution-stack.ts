import cdk = require("@aws-cdk/cdk");
import route53 = require("@aws-cdk/aws-route53");

import Distribution from "./constructs/distribution";

interface PreviewDistributionStackProps {
  zoneId: string;
  env: cdk.Environment;
}

export class PreviewDistributionStack extends cdk.Stack {
  public readonly distribution: Distribution;

  constructor(
    scope: cdk.App,
    id: string,
    props: PreviewDistributionStackProps
  ) {
    super(scope, id);

    const previewZone = route53.PublicHostedZone.import(this, "PreviewZone", {
      zoneName: "preview.livejam.io",
      hostedZoneId: props.zoneId
    });

    const preview = new Distribution(this, "LivejamPreviewDistribution", {
      name: "LivejamPreview",
      domainNames: ["*.preview.livejam.io"],
      certificateArn: this.node.getContext("preview_domain_certificate")
    });

    new route53.AliasRecord(this, "AliasDomain", {
      recordName: "*",
      target: preview.distribution,
      zone: previewZone
    });

    this.distribution = preview;
  }
}
