# Versionify

> Handle more easier your string version on node.js

## How to use it?
First, install it with
```
  npm i @sebastiantuyu/versionify
```

```
  const versionify = require("@sebastiantuyu/versionify");

  versionify.nextPatch("1.0.0") // 1.0.1
  versionify.nextMinor("1.0.0") // 1.1.0
  versionify.nextMajor("1.0.0") // 2.0.0
  versionify.previousPatch("1.0.1") // 1.0.0
  versionify.previousMinor("1.1.0") // 1.0.0
  versionify.previousMajor("1.0.0") // 0.0.0
```
