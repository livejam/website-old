#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { WebsiteStack } from "../lib/website-stack";

const app = new cdk.App();

new WebsiteStack(app, `LivejamWebsiteStack`, {
  zoneId: app.node.getContext("main_zone_id")
});

app.run();
