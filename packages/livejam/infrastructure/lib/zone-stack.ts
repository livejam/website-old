import cdk = require("@aws-cdk/cdk");
import Zones from "./constructs/zones";

export class ZoneStack extends cdk.Stack {
  public readonly zones: Zones;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.zones = new Zones(this, "LivejamZones");

    new cdk.Output(this, "mainZoneNameServers", {
      value: cdk.Fn.join(",", <string[]>(
        this.zones.mainZone.hostedZoneNameServers
      ))
    });

    new cdk.Output(this, "previewZoneNameServers", {
      value: cdk.Fn.join(",", <string[]>(
        this.zones.previewZone.hostedZoneNameServers
      ))
    });

    new cdk.Output(this, "mainZone", {
      value: this.zones.mainZone.hostedZoneId
    });

    new cdk.Output(this, "previewZone", {
      value: this.zones.previewZone.hostedZoneId
    });
  }
}
