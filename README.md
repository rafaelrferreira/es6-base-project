# Es6-base-project
Base project to be used on ES6+ Projects

# Dev Stack:
Babel, Javascript, VSCode
| TECH | LINK |
| ------ | ------ |
| Babel | [https://babeljs.io/] |
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript] |
| VSCode | [https://code.visualstudio.com/] |
| NPM | [https://www.npmjs.com/] |

## Getting Started
```sh
git clone [this repo]
npm install
```

## Building Stuff
To build everything manually you can use 
`npm run dev`.

## Running local webserver
`npm server`
This brings up a local webserver from which you can view your changes in a browser.

## Automatically Build & Refresh
`npm dev`
For easily keep *automatically* building stuff.

## Manually Replicate the same Project (GCAS - GIT CLONE AVERSION SYNDROME)
```sh
mkdir es6plus
cd es6plus
npm init -y
git init
```

- criar arquivo ".babelrc":
```sh{
"presets": ["@babel/preset-env"]
}
```

```sh
npm install i @babel/core @babel/cli @babel/preset-env --save-dev
```

- node_modules/.bin/babel ./src/main.js -o ./public/bundle.js
- node_modules/.bin/babel ./src/main.js -o ./public/bundle.js -w
obs: para usar npx -> node v > 5

- npx babel ./src/main.js -o ./public/bundle.js -w

- Scripts do arquivo package.json:
```sh
"scripts": {
  "dev": "babel ./src/main.js -o ./public/bundle.js -w",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- Execute:
```sh
npm run dev
```

- create folder/file: public > index.html
- create folder/file:criar pasta src > main.js
