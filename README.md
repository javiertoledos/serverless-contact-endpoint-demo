# Serverless Contact endpoint demo

A lambda serverless function that receives some user input and stores it in a dynamodb table.

# Get started

## Prerequisites

* [Node 12](https://nodejs.org/es/)
* [Serverless framework](https://serverless.com/framework/docs/getting-started/)
* [Java runtime environment 6 or above](https://www.java.com/en/download/)

## Dependencies

* [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html)
* [Serverless dynamodb local plugin](https://github.com/99xt/serverless-dynamodb-local)
* [Serverless offline plugin](https://github.com/dherault/serverless-offline)

## Installation

```bash
# Install node deps
npm install

# Install dynamodb local
serverless dynamodb install

# Start and migrate tables into dynamodb local (Press CTRL+C after finished)
sls dynamodb start --migrate
```

## Run lambdas in offline mode

```bash
serverless offline start
```
