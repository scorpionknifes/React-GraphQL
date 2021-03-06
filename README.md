# React GraphQL Jobs

[![Build Status](https://dev.azure.com/chengzhenyang/React-GraphQL/_apis/build/status/scorpionknifes.React-GraphQL?branchName=master)](https://dev.azure.com/chengzhenyang/React-GraphQL/_build/latest?definitionId=1&branchName=master)

[Hosted on Azure](https://react-graphql.azurewebsites.net/)

[Hosted on Github Pages](http://scorpionknifes.github.io/React-GraphQL)

This project is an assignment for Microsoft Student Accelerator NZ 2020 Phase 1.
Front End Development - React Web App.

The following project uses:
- React - Typescript
- MaterialUI
- [GraphQL jobs](https://api.graphql.jobs/) - using Apollo
- Allow user to input query information

[Microsoft Student Accelerator](http://aka.ms/nzmsawebsite)
[2020-Phase-1](https://github.com/NZMSA/2020-Phase-1)

![](https://scorpionknifes.github.io/React-GraphQL/example.jpg)

#### Azure Pipelines

Azure build pipeline creates releases when new commits to ```develop``` and ```master``` branches

Azure release pipeline deploy ```master``` branch to [Azure Web App](https://react-graphql.azurewebsites.net/)

Caching of ```node_modules``` is enabled in this project with artifacts for faster build time


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
