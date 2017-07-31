# AMgrade mock boilerplate
Start to build `HTML + CSS + JS` with one command  
  
## Installation and build
- Clone repo `git clone git@github.com:amgradetech/amgrade-mock-boilerplate.git`
- Go into directory `cd my-mock`
- Reinit git repo `rm -rf .git && git init`
- Install deps `npm i`

To build js, css and images assets run:  
`npm run build`  
  
Build includes:  
- `js`:  ES6 modules bundling and transpiling with `rollup`
- `scss`: compiling into css with `node-sass`
- `images` minification with `imagemin`
  
## Development  
To start watch mode for js and scss files run:  
`npm start`

It will run `rollup` and `node-sass` watch modes in parallel.

## Precommit hook
Precommit hook will process staged files with `lint-staged`: 
- lint js with `eslint`
- lint scss with `sass-lint` (care, it has quiet strict rules)
- minify staged images with `imagemin`  
  
`NOTE: Husky will run lint commands in silent mode :(, so you have to rerun specific failed command to check why it fails. eg npm run css:lint`
