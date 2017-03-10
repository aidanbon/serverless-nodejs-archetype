# A boilerpate development enviroment and reference implementation for AWS Lambda Node.js functions using the [Serverless Framework](https://serverless.com/)

This is a development environment and reference implementation for an AWS Lambda Node.js 4.3 function. Features include:
* implement in modern Javascript (ES6);
* unit test with [Mocha runner](https://mochajs.org/);
* static type check with [flow](https://flowtype.org);
* pre-commit Git hook with [husky](https://github.com/typicode/husky);
* deploy to AWS Lambda via the [Serverless Framework](https://serverless.com/);
* trigger by HTTP POST and/or S3 CreateObject Event;
* local unit tests and cloud integration tests;
* live tail CloudWatch logs at command line.

> Note that in this Lambda reference implementation, Node.js is used. However, this environment and framework should work for [other Lambda supported languages](http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html) like Java or Python.

## Getting Started

The Lambda Function is written in ES6 Node.js, and deployed via the [Serverless Framework](https://serverless.com/).
The life-cycle (code linting, unit test, integration tests and various stage deployment) commands are 
wrapped as NPM scripts and can be easily be added to continuous integration/deployment framework like Jenkins.

> In order to deploy and execute the functions in this module, you must have the relevant AWS previledges. See [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for a full discussion.

To checkout and CD to the module:

```
git clone git@github.com:aidanbon/serverless-nodejs-archetype.git && cd serverless-nodejs-archetype && npm i
```

In the next section, we'll describe the various life-cycle commands.

## Life-Cycle Commands

| Life-Cycle | Command | Description |
| ---------- | ------- | ----------- |
| development | npm run lint | perform syntax and type checking on the source code |
| testing | npm t | run local unit tests |
| deploymnet | npm run deploy | deploy to AWS Lambda in dev mode |
| deployment | npm run deploy:prod | deploy to AWS Lambda in production mode |
| deploymnet | npm run deploy:func | just re-deploy the function only, no infrastructure changes (faster) |
| testing | npm run test:invoke:http | launch integration test with a simulated HTTP event |
| testing | npm run test:invoke:s3 | launch integration test with a simulated S3 event |
| testing | npm run test:curl | launch integration test to hit the API endpoint via cURL |
| monitoring | npm run tail | tail the CloudWatch log for the Lambda function |
| clean up | npm run remove | to delete the AWS infrastructure created during deployment |


## Tools and Tips
* Javascript code are written in [ES2015](https://ponyfoo.com/articles/es6), and store under the [src](./src) folder.
* Code are transpiled by [Babel](https://babeljs.io) to ES5 for Node v4.3 runtime in AWS Lambda. The transpiled code is stored at _dist_ folder.
* Use [standard.js](https://github.com/feross/standard) for code style linting. ([What is linting anyway?](http://stackoverflow.com/questions/8503559/what-is-linting)). Note: unit tests are excluded.
* Use [flow](https://flowtype.org) for optional static type checking.
* Use [husky](https://github.com/typicode/husky) to prevent bad commits.
* Use _const_, _let_, and avoid using _var_ unless really needed. See [discussion here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.ng9nuhmcx).
* The entry point AWS Lambda function is [handler.js](./src/handler.js).
* Unit tests (with the [Mocha](https://mochajs.org/) test runner and [Chai](http://chaijs.com/api/bdd/) assertion library) are located at [test](./test) folder with -test.js suffix.

