module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
          "jsx": true,
    }
  },
  "rules": {
    "no-console": "off",
    "strict": ["error", "global"],
    "curly": "warn"
  }
}