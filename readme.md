# Terminal Logs Demo App
### In this sample application we outline best practices for integrating
Terminal cloud logging into your Ethereum application using the Terminal
SDK.  If you are interested in learning more about what the Terminal sdk
can do for you, see the official Terminal [docs](https://docs.terminal.co/) or view the official package on [npm](https://www.npmjs.com/package/@terminal-packages/sdk)

### Installation

Clone the repo:
`git clone git@github.com:kinrezC/logs-tester.git`

Install dependencies:
`yarn install`
or
`npm install`

Note: Some modules used in this project require node version <11.0.0.
To downgrade node versions run the following command:

`sudo n 10.5`

### Usage Guide

Upon initial installation, this project will not be configured with your
Terminal account's information. In order to configure this project to
test the logs and analytics interface, you will need to create a
Terminal account.  

In order to do so, head to [https://terminal.co](https://terminal.co) and create an account.

Once you've successfully created your Terminal account, follow [this
short guide](https://docs.terminal.co/terminal-platform/create-an-api-key) to find generate your api key.  In addition to your api key, you will also need to locate the projectId of the project you intend to send logs to.  For a short guide on how to locate the projectId, click [here](https://docs.terminal.co/logs-analytics/locating-the-project-id)

Find the `constants.js` file located in `./src/constants/`.  On line 24
of this file, find the `baseObject` declaration. Replace the empty
strings inside `baseObject` with your personal API key and projectId,
        then save the file.

Next, run the application locally with the following command:

`yarn start`

Now you will have successfully provisioned the logs testing environment.
By clicking one of the "Test" buttons, you will make an RPC call for the
current ETH mainnet block number.  Go ahead and try out a few of the
buttons and head back into your Terminal project to view the logs
corresponding to each request.
