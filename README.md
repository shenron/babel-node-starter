## minimal babel-node-starter

Minimal Webpack NodeJs Starter Kit :package:

Includes

- [**Flow**](https://flow.org/) static typechecker for JavaScript
- [**Babel**](https://babeljs.io/) next generation JavaScript (transpiler for module-system & flow)
- [**Jest**](https://facebook.github.io/jest/) for testing, mocking and coverage report
- [**EsLint**](https://eslint.org/) eslint
- [**Webpack**](https://webpack.js.org/) module bundler
- [**Docker**](https://www.docker.com/) create container
- [**husky**](https://github.com/typicode/husky) git hooks

## Scripts
```bash
npm run / yarn
dev ------------ run server with hot-reload (babel-watch)
build ---------- creates bundled default build (babel)
build:babel ---------- creates bundled babel build
build:webpack ---------- creates bundled webpack build
test ----------- runs tests with coverage reports
flow ------------ run flow-bin
lint ------------ run eslint
lint:fix ------------ run eslint and auto fix if possible
flow:deps ------------ install flow-typed (jest)
serve ------------ Build and launch the application
```

## Sources & Notes
#### Flow With VScode
https://github.com/flowtype/flow-for-vscode
##### Flow in Webstorm:
https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/  
in webstorm add a jest test manually
##### Flow:
https://github.com/facebook/flow  
https://flow.org/en/docs/install/  
https://github.com/flowtype/flow-typed  
##### Jest:
https://facebook.github.io/jest/docs/en/getting-started.html#using-babel  
##### Babel:
https://babeljs.io/docs/setup/#installation
##### Source map support:
https://github.com/evanw/node-source-map-support#readme

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
