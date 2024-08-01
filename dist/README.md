[![npm version](https://badge.fury.io/js/domaindumper.svg)](https://badge.fury.io/js/domaindumper) [![Netlify Status](https://api.netlify.com/api/v1/badges/eadf929b-e093-4a1a-b449-9eb62242aff9/deploy-status)](https://app.netlify.com/sites/domaindumper/deploys)

Domain Dumper daily states of domains

An API that provides statistics for domains that are registered every day. Here you can get daily updates on how many domains are registered on each TLD. We update our files every 24 hours.

# How to use

## Installing

### Package manager

Using npm:

```bash
$ npm install domaindumper
```

Using bower:

```bash
$ bower install domaindumper
```

Using yarn:

```bash
$ yarn add domaindumper
```

Using pnpm:

```bash
$ pnpm add domaindumper
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import domaindumper, {isCancel, domaindumperError} from 'domaindumper';
```

You can also use the default export, since the named export is just a re-export from the domaindumper factory:

```js
import domaindumper from 'domaindumper';

console.log(domaindumper.isCancel('something'));
````

If you use `require` for importing, **only default export is available**:

```js
const domaindumper = require('domaindumper');

console.log(domaindumper.isCancel('something'));
```

All documentation moved to under this url: [https://statistics.domaindumper.com/](https://statistics.domaindumper.com/)

# Need premium services

if you need premium services like domains Whois OR Free daily registered domain names, then you can find this information on our other website: [https://www.whoisextractor.in/](https://www.whoisextractor.in/ "Whoisextractor")