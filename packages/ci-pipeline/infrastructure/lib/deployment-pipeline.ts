#!/usr/bin/env node
import codebuild = require("@aws-cdk/aws-codebuild");
import codepipeline = require("@aws-cdk/aws-codepipeline");
import iam = require("@aws-cdk/aws-iam");
import cdk = require("@aws-cdk/cdk");

export class LivejamPipeline extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props);

    const pipeline = new codepipeline.Pipeline(this, "LivejamPipeline", {
      pipelineName: "livejam-pipeline"
    });

    // Source
    const githubAccessToken = new cdk.SecretParameter(this, "GitHubToken", {
      ssmParameter: "/CDK/GitHubToken"
    });

    const source = new codepipeline.GitHubSourceAction(this, "GitHubSource", {
      stage: pipeline.addStage("Source"),
      owner: "IntraBaseIO", // Case sensitive!
      repo: "livejam",
      branch: "master",
      oauthToken: githubAccessToken.value
    });

    // Build

    const buildStage = pipeline.addStage("Deploy");
    const project = new codebuild.PipelineProject(this, "Livejam", {
      buildSpec: "packages/livejam/buildspec.yml",
      environment: {
        buildImage: codebuild.LinuxBuildImage.UBUNTU_14_04_NODEJS_10_1_0
      }
    });

    new codebuild.PipelineBuildAction(this, "LivejamDeployment", {
      stage: buildStage,
      project,
      inputArtifact: source.outputArtifact
    });

    // This should be reduced to the actual necessary permissions
    project.addToRolePolicy(
      new iam.PolicyStatement().addActions("*").addResource("*")
    );
  }
}
