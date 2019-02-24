#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { ZoneStack } from "../lib/zone-stack";

const app = new cdk.App();

new ZoneStack(app, "LivejamZoneStack");

app.run();
