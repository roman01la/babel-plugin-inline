# babel-plugin-inline
![](https://img.shields.io/badge/maintainer%20needed-!-red.svg)

Array map/filter/reduce inlining plugin.

**WIP See tests for what's working right now**

## Installation

```sh
$ npm i -D babel-plugin-inline
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["inline"]
}
```

### Via CLI

```sh
$ babel --plugins inline script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['inline']
});
```
