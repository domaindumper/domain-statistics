# Domain Dumper

[![npm version](https://badge.fury.io/js/domaindumper.svg)](https://badge.fury.io/js/domaindumper)
[![Netlify Status](https://api.netlify.com/api/v1/badges/eadf929b-e093-4a1a-b449-9eb62242aff9/deploy-status)](https://app.netlify.com/sites/domaindumper/deploys)

Domain Dumper delivers daily updates on the statistics of all registered domains across 900+ zones, with records dating back to January 1, 1990. This API provides daily updates on the number of domains registered on each TLD and updates its files every 24 hours.

## Table of Contents

- [Installation](#installation)
  - [Using npm](#using-npm)
  - [Using yarn](#using-yarn)
- [Usage](#usage)
  - [Importing the Library](#importing-the-library)
- [Examples](#examples)
- [Documentation](#documentation)
- [Premium Services](#premium-services)
- [License](#license)

## Installation

You can install the `domaindumper` package using npm or yarn.

### Using npm

```bash
npm install domaindumper
```

### Using yarn

```bash
yarn add domaindumper
```

## Usage

Once the package is installed, you can import the library using either the `import` or `require` approach.

### Importing the Library

#### Using ES6 `import`

```javascript
import domaindumper, { isCancel, domaindumperError } from 'domaindumper';

console.log(domaindumper.isCancel('something'));
```

#### Using CommonJS `require`

If you use `require` for importing, only the default export is available:

```javascript
const domaindumper = require('domaindumper');

console.log(domaindumper.isCancel('something'));
```

## Examples

For more examples and detailed usage, please visit our documentation at [Domain Dumper Statistics](https://statistics.domaindumper.com/).

## Premium Services

If you need premium services like domain WHOIS or free daily registered domain names, you can find this information on our other website: [Whois Extractor](https://www.whoisextractor.in/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
