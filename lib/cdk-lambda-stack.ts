import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.Function( this, 'GoFunction', {
      functionName: 'GoFunction',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.asset('./lambda/bin')
    })
  }
}
