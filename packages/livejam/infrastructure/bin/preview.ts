#!/usr/bin / env node
import cdk = require("@aws-cdk/cdk");

import { PreviewDistributionStack } from "../lib/preview-distribution-stack";
import { PreviewStack } from "../lib/preview-stack";

const app = new cdk.App();

const branchName = app.node.getContext("branch_name");

const previewDistribution = new PreviewDistributionStack(
  app,
  "PreviewDistributionStack",
  {
    zoneId: app.node.getContext("preview_zone_id"),
    env: {
      region: "us-east-1"
    }
  }
);

new PreviewStack(app, "PreviewStack", {
  branchName: branchName,
  bucket: previewDistribution.distribution.bucket,
  env: {
    region: "us-east-1"
  }
});

app.run();
