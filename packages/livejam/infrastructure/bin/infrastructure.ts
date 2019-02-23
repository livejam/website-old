#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { InfrastructureStack } from "../lib/infrastructure-stack";

const app = new cdk.App();

const branchName = app.node.getContext("branch_name");
new InfrastructureStack(app, `InfrastructureStack-${branchName}`);
app.run();
