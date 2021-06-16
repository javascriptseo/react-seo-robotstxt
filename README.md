# react-seo-robotstxt

React Robots.txt file Generator

## Installation

### npm

```shell
npm i react-seo-robotstxt
```

### yarn

```shell
yarn add react-seo-robotstxt
```

## Usage

Step 1: Create `robots-txt.config` file in your root directory.

Step 2: Add configurations as per your preference.

```diff
  module.exports = {
    policy: {
      userAgent: "*",
      disallow: ["/testdisallow", "/enterprise/orgs-terms"],
      allow: ["/testallow", "/browse"],
    },
  };
```

Example 02

```diff
  module.exports = {
    policy: {
      userAgent: "*",
      disallow: [""],
      allow: [],
    },
  };
```

Step 3: Import `generateRobotText` from the package in `index.js`

```diff
  const { generateRobotText } = require("react-seo-robotstxt");

  generateRobotText();
```
