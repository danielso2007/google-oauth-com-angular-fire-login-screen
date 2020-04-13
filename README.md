![AngularCI](https://github.com/danielso2007/google-oauth-com-angular-fire-login-screen/workflows/AngularCI/badge.svg?branch=master)
![GitHub package version](https://img.shields.io/github/package-json/v/danielso2007/google-oauth-com-angular-fire-login-screen.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/google-oauth-com-angular-fire-login-screen.svg)](https://github.com/danielso2007/google-oauth-com-angular-fire-login-screen/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/google-oauth-com-angular-fire-login-screen.svg)](https://github.com/danielso2007/google-oauth-com-angular-fire-login-screen/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/google-oauth-com-angular-fire-login-screen.svg)
[![GitHub issue/pull request author](https://img.shields.io/github/issues/detail/u/danielso2007/google-oauth-com-angular-fire-login-screen/1.svg)](https://github.com/danielso2007/google-oauth-com-angular-fire-login-screen/pulls)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/google-oauth-com-angular-fire-login-screen.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/google-oauth-com-angular-fire-login-screen.svg)
[![GitHub All Releases](https://img.shields.io/github/downloads/danielso2007/google-oauth-com-angular-fire-login-screen/total.svg)](https://github.com/danielso2007/google-oauth-com-angular-fire-login-screen/archive/master.zip)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# Google OAuth with @angular/fire Login Screen

This project build a Firebase Google sign in user authentication flow with @angular/fire that saves custom user data to the Firestore.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

# Firebase CLI

These are the Firebase Command Line Interface (CLI) Tools.

```
npm install -g firebase-tools
```

- [Documentation.](https://github.com/firebase/firebase-tools)

# AngularFire

The official library for Firebase and Angular

```
npm install firebase @angular/fire --save
```

- [Documentation.](https://github.com/angular/angularfire2)

# Setting up variables for the environment

Create a file named `.env.ts` at the root of the project. Then add your Firebase configuration:

```
const firebaseConfigProd = {
    apiKey: "<your-key>",
    authDomain: "<your-project-authdomain>",
    databaseURL: "<your-database-URL>",
    projectId: "<your-project-id>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-messaging-sender-id>",
    appId: "<your-app-id>"
};

const firebaseConfigDev = {
    apiKey: "<your-key>",
    authDomain: "<your-project-authdomain>",
    databaseURL: "<your-database-URL>",
    projectId: "<your-project-id>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-messaging-sender-id>",
    appId: "<your-app-id>"
};

export { firebaseConfigDev };
export { firebaseConfigProd as firebaseConfig };
```

The `.env.ts` file is set to` .gitignore`.


# Firebase Auth Quickstarts

- [Documentation.](https://github.com/firebase/quickstart-js/blob/master/auth/README.md)

# Firebase Authentication

- [Documentation.](https://firebase.google.com/docs/auth/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
