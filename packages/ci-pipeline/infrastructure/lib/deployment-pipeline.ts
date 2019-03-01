#!/usr/bin/env node
import codebuild = require("@aws-cdk/aws-codebuild");
import iam = require("@aws-cdk/aws-iam");
import cdk = require("@aws-cdk/cdk");

export class LivejamPipeline extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props);

    const githubAccessToken = new cdk.SecretParameter(this, "GitHubToken", {
      ssmParameter: "/CDK/GitHubToken"
    });

    const gitHubSource = new codebuild.GitHubSource({
      owner: "IntraBaseIO",
      repo: "livejam",
      oauthToken: githubAccessToken.value,
      webhook: true // will be overwritten
    });

    const project = new codebuild.Project(this, "Livejam", {
      source: gitHubSource,
      buildSpec: "packages/livejam/buildspec.yml",
      environment: {
        buildImage: codebuild.LinuxBuildImage.fromDockerHub(
          "livejamio/aws-codebuild"
        )
      }
    });

    const projectResource = project.node.findChild(
      "Resource"
    ) as codebuild.CfnProject;

    projectResource.addPropertyOverride("Triggers", {
      Webhook: true,
      FilterGroups: [
        [
          {
            Pattern: "PUSH",
            Type: "EVENT"
          },
          {
            Pattern: "^136789|179382$",
            Type: "ACTOR_ACCOUNT_ID"
          },
          {
            Pattern: "^refs/heads/master$",
            Type: "HEAD_REF"
          }
        ]
      ]
    });

    // This should be reduced to the actual necessary permissions
    project.addToRolePolicy(
      new iam.PolicyStatement().addActions("*").addResource("*")
    );
  }
}
