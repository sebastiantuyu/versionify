# Versionify

> Handle more easier your string version on node.js

In version <code>0.2.0</code> supports <code>package.json</code> versioning!

## How to use it?
First, install it with
```
  npm i @sebastiantuyu/versionify
```

```
  const versionify = require("@sebastiantuyu/versionify");

  // Calling a function with NO parameters will also update the package.json!
  versionify.nextPatch() --> upgrade the version to the next patch in the package.json

  // Passing true as second argument will modify the package.json!
  versionify.nextPatch("1.0.0", true) --> package.json is upgraded

  // By default will only return the modified string
  versionify.nextPatch("1.0.0") // 1.0.1
  versionify.nextMinor("1.0.0") // 1.1.0
  versionify.nextMajor("1.0.0") // 2.0.0
  versionify.previousPatch("1.0.1") // 1.0.0
  versionify.previousMinor("1.1.0") // 1.0.0
  versionify.previousMajor("1.0.0") // 0.0.0
```
