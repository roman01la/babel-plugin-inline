# babel-plugin-inline

Array map/filter/reduce inlining plugin.

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
