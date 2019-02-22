#!/usr/bin/env node
import codebuild = require("@aws-cdk/aws-codebuild");
import iam = require("@aws-cdk/aws-iam");
import cdk = require("@aws-cdk/cdk");

export class LivejamPipeline extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props);

    // Source
    const githubAccessToken = new cdk.SecretParameter(this, "GitHubToken", {
      ssmParameter: "/CDK/GitHubToken"
    });

    const gitHubSource = new codebuild.GitHubSource({
      owner: "IntraBaseIO",
      repo: "livejam",
      oauthToken: githubAccessToken.value,
      webhook: true
    });

    const project = new codebuild.Project(this, "Livejam", {
      source: gitHubSource,
      buildSpec: "packages/livejam/buildspec.yml",
      environment: {
        buildImage: codebuild.LinuxBuildImage.UBUNTU_14_04_NODEJS_10_1_0
      }
    });

    // This should be reduced to the actual necessary permissions
    project.addToRolePolicy(
      new iam.PolicyStatement().addActions("cloudformation:*").addResource("*")
    );
  }
}
