<img src="https://walde.co/wp-content/uploads/2016/05/es6-logo.png" alt="es6 icon" width="60" height="60" />

<img src="https://img.shields.io/github/v/release/rafaelrferreira/es6-base-project?label=es6-base-project&style=for-the-badge" /> <img src="https://img.shields.io/github/languages/code-size/rafaelrferreira/es6-base-project?style=for-the-badge" />

# Es6-base-project
Base project to be used on ES6+ Projects

# Dev Stack:
[![My Skills](https://skillicons.dev/icons?i=js,html,css,tailwind,vscode,npm)](https://skillicons.dev)

| TECH | LINK |
| ------ | ------ |
| Babel | [https://babeljs.io/] |
| Jest | [https://jestjs.io/] |
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript] |
| VSCode | [https://code.visualstudio.com/] |
| NPM | [https://www.npmjs.com/] |

## Getting Started
```sh
git clone [this repo]
npm install
```
## Front-End - Tailwind
![image](https://user-images.githubusercontent.com/3987102/166125089-056f69bc-48c2-4ba7-8ee3-3b1e9186ec94.png)

## Building Stuff
To build everything manually you can use 
`npm run dev`.

## Running local webserver
`npm server`
This brings up a local webserver from which you can view your changes in a browser.

## Running tests and code coverage
`npm test`

## Automatically Build & Refresh
`npm dev`
For easily keep *automatically* building stuff.

## Other packages suggestions:
- Pm2
- Gulp
- Nodemon
- Eslint

## Manually Replicate the same Project (GCAS - GIT CLONE AVERSION SYNDROME)
```sh
mkdir es6plus
cd es6plus
npm init -y
git init
jest --init
```

- create file ".babelrc":
```sh{
"presets": ["@babel/preset-env"]
}
```

```sh
npm install i @babel/core @babel/cli @babel/preset-env --save-dev
```

- node_modules/.bin/babel ./src/main.js -o ./public/bundle.js
- node_modules/.bin/babel ./src/main.js -o ./public/bundle.js -w
obs: to use npx -> node version > 5

- npx babel ./src/main.js -o ./public/bundle.js -w

- Scripts package.json:
```sh
"scripts": {
    "server": "http-server -o",
    "dev": "babel ./src/main.js -o ./public/bundle.js -w",
    "test": "jest --coverage",
    "test:watch": "jest --watch"
}
```

- Execute Project and Tests:
```sh
npm run dev
npm test
```

- create folder/file: public > index.html
- create folder/file:criar pasta src > main.js
