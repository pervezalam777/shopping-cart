# Shopping Cart

## Requirement

## How to Run
### Pre-requisites
1) Node 12+
2) Run *npm install* on root project directory.

### Development environment
```bash
$ npm start
```
### Test
```bash
$ npm test
```

### Debug Test
```bash
$ npm run test:debug
```

### Coverage
```bash
$ npm test -- --coverage
```

### Analyzing the Bundle Size
```bash
$ npm run build
$ npm run analyze
```

### Check type error
```bash
$ npm run flow
```

## Development approaches

### Code conventions
* **folder name**: folder name should be in kebab-case
* **Component File name**: component file name should be in UpperCamelCase
* **Utility function module file**: utility files with multiple exports should be in lowerCamelCase
* **CSS file name** should match the component file name convention.

### Clean code guidelines

* No commented code should should left in code files.
* **Flag Argument** Avoid using boolean flag in function parameters
* **Too Many Arguments** Function parameter should not be more than three
* **Dead Function**: Method or class never called should be deleted.
* **Duplication**: Do not Repeat Yourself
* **Function Names Should Say What They Do**
* **Avoid Negative Conditionals**
* **Function Should Do One Thing**
* **Avoid Long Import List** 
* **Constant vs Symbol** symbol are primitive types to use symbol with fall back in place.
* **Use Long Name for Long Scopes**  

## Server API

## Application Store structure

## Routes


## NOTES

## Flow Language Support for Visual Studio Code

#### Add extension *Flow Language Support*
Read instruction for [Flow Language Support](https://github.com/flowtype/flow-for-vscode)

####  Remove builtin support for ts in VSCode
1) Go to extensions tab
2) Search for **@builtin TypeScript and JavaScript Language Features**
3) Click on Disable or Disable (workspace)

## References
