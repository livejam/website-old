import cdk = require("@aws-cdk/cdk");
import route53 = require("@aws-cdk/aws-route53");

export default class Zones extends cdk.Construct {
  public readonly mainZone: route53.PublicHostedZone;
  public readonly previewZone: route53.PublicHostedZone;

  constructor(parent: cdk.Construct, name: string) {
    super(parent, name);

    const mainZone = new route53.PublicHostedZone(this, "MainZone", {
      zoneName: "livejam.io"
    });

    const previewZone = new route53.PublicHostedZone(this, "PreviewZone", {
      zoneName: "preview.livejam.io"
    });

    const zoneDelegation = new route53.ZoneDelegationRecord(
      this,
      "PreviewZoneDelegation",
      {
        zone: mainZone,
        delegatedZoneName: previewZone.zoneName,
        nameServers: [] // will be overwritten
      }
    );

    // mainZone.hostedZoneNameServers returns "null | string[]", nameServers expects "string[]"
    // Hence, we'll have to fall back to cloudformation level for now.
    // Created an issue: https://github.com/awslabs/aws-cdk/issues/1847
    const zoneDelegationResource = zoneDelegation.node.findChild(
      "Resource"
    ) as route53.CfnRecordSet;

    zoneDelegationResource.addPropertyOverride(
      "ResourceRecords",
      previewZone.hostedZoneNameServers
    );

    this.mainZone = mainZone;
    this.previewZone = previewZone;
  }
}
