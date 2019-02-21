#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { LivejamPipeline } from "../lib/deployment-pipeline";

const app = new cdk.App();
new LivejamPipeline(app, "LivejamPipeline");
app.run();
