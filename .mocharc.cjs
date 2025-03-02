module.exports = {
    "extensions": ["ts", "tsx"],
    "require": [ "ts-node/register", "src/test-hooks.test.ts" ],
    // "loader": "ts-node/esm",
    "spec": [
      "src/**/*.spec.ts"
    ],
    "watch-files": [
      "src"
    ]
}