# Domain Dumper

[![npm version](https://badge.fury.io/js/domaindumper.svg)](https://badge.fury.io/js/domaindumper)
[![Netlify Status](https://api.netlify.com/api/v1/badges/eadf929b-e093-4a1a-b449-9eb62242aff9/deploy-status)](https://app.netlify.com/sites/domaindumper/deploys)

Domain Dumper delivers daily updates on the statistics of all registered domains across 900+ zones, with records dating back to January 1, 1990. This API provides daily updates on the number of domains registered on each TLD and updates its files every 24 hours.

## Features

* **Daily domain registration statistics:**  Access data on the number of domains registered daily for each TLD.
* **Regular updates:** Data is refreshed every 24 hours, ensuring you have access to the latest information.
* **Easy integration:**  Simple to use API for seamless integration into your projects.

## Installation
You can install the domaindumper package using npm or yarn.

**Using npm:**

```bash
npm install domaindumper
````

**Using yarn:**

```bash
yarn add domaindumper
```

## Usage
Once the package is installed, you can import the library using either the import or require approach.

**Using ES6 import:**

```javascript
import domaindumper, { isCancel, domaindumperError } from 'domaindumper';

console.log(domaindumper.isCancel('something'));
```

**Using CommonJS require**
If you use require for importing, only the default export is available:


```javascript
const domaindumper = require('domaindumper');

console.log(domaindumper.isCancel('something'));
```

**Note:** For detailed documentation and examples, please visit [https://statistics.domaindumper.com/](https://statistics.domaindumper.com/).


## Premium Services

For premium services like domain Whois information or free daily lists of registered domain names, please visit [Whois Extractor](https://www.whoisextractor.in/).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
