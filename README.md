# es6-base-project
Base project to be used on ES6+ Projects

# Dev Stack:
Babel, Javascript, VSCode

## Getting Started
git checkout
npm install
npm run dev
`npm install` to install dependencies.

## Building Stuff
To build everything manually you can use `npm run dev`.

## Running local webserver
`npm server`
This brings up a local webserver from which you can view your changes in a browser.

## Automatically Build & Refresh
`npm dev`
For easily keep *automatically* building stuff.


## Manually Replicate the same Project (GCAS - GIT CLONE AVERSION SYNDROME)

mkdir es6plus
cd es6plus
npm init -y
git init

criar .babelrc
{
"presets": ["@babel/preset-env"]
}

npm install i @babel/core @babel/cli @babel/preset-env --save-dev

node_modules/.bin/babel ./src/main.js -o ./public/bundle.js
node_modules/.bin/babel ./src/main.js -o ./public/bundle.js -w

obs: para usar npx -> node v > 5

npx babel ./src/main.js -o ./public/bundle.js -w

"scripts": {
  "dev": "babel ./src/main.js -o ./public/bundle.js -w",
  "test": "echo \"Error: no test specified\" && exit 1"
},

test =>> npm run dev

create folder/file: public > index.html
create folder/file:criar pasta src > main.js
