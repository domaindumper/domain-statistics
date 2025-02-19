# DomainDumper

[![npm version](https://badge.fury.io/js/domaindumper.svg)](https://www.npmjs.com/package/domaindumper)
[![GitHub license](https://img.shields.io/github/license/domaindumper/domain-statistics)](https://github.com/domaindumper/domain-statistics/blob/main/LICENSE)

A JavaScript library for accessing domain registration statistics via the DomainDumper API.

## Installation

```bash
npm install domaindumper
```

## Features

- Fetch registrar information and details
- Get TLD (Top Level Domain) details and lists
- Access domain registration statistics
- Country-based domain statistics
- Root zone database access
- Comprehensive error handling

## Quick Start

```javascript
import { 
  getRegistrarsList,
  getRegistrarsDetails,
  getTldDetails,
  getTldsList,
  getDomainStats,
  getRootDatabase
} from 'domaindumper';

// Basic usage example
const registrars = await getRegistrarsList();
console.log(registrars);
```

## API Reference

### Registrar Operations

```javascript
// Get basic registrar list
const registrars = await getRegistrarsList();
/* Response:
{
  "registrars": [
    {
      "id": 1,
      "name": "Example Registrar",
      "url": "https://example.com"
    }
  ]
}
*/

// Get detailed registrar information
const details = await getRegistrarsDetails();
/* Response:
{
  "registrars": [
    {
      "id": 1,
      "name": "Example Registrar",
      "url": "https://example.com",
      "details": {
        // Additional registrar details
      }
    }
  ]
}
*/
```

### TLD Operations

```javascript
// Get list of all TLDs
const tldsList = await getTldsList();
/* Response:
[
  "com",
  "net",
  "org"
]
*/

// Get specific TLD details
const tldInfo = await getTldDetails('com');
/* Response:
{
  "name": "com",
  "type": "generic",
  "manager": "VeriSign Global Registry Services",
  "rootServers": [
    "a.gtld-servers.net",
    "b.gtld-servers.net"
  ]
}
*/

// Get root zone database
const rootDb = await getRootDatabase();
/* Response:
[
  {
    "name": "com",
    "type": "generic",
    "manager": "VeriSign Global Registry Services"
  }
]
*/
```

### Statistics Operations

```javascript
// Get domain statistics for specific date
const stats = await getDomainStats('2024', '02', '19');
/* Response:
{
  "countryStats": {
    "US": 1000000,
    "GB": 500000
  },
  "registrarStats": {
    "1": 100000,
    "2": 50000
  },
  "tldStats": {
    "com": 2000000,
    "net": 1000000
  }
}
*/
```

### Error Handling

```javascript
try {
  const stats = await getDomainStats('2024', '02', '19');
} catch (error) {
  if (error.response) {
    console.error('API Error:', error.response.data.message);
  } else {
    console.error('Network Error:', error.message);
  }
}
```

## Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test
```

## API Documentation

Full API documentation is available at:
- [API Documentation](https://statistics.domaindumper.com/api/v1)
- [Swagger UI](https://statistics.domaindumper.com/api-docs)

## Support

- Documentation: [https://statistics.domaindumper.com/docs](https://statistics.domaindumper.com/docs)
- Email: support@domaindumper.com
- Issues: [GitHub Issues](https://github.com/domaindumper/domain-statistics/issues)

## License

MIT License - see the [LICENSE](https://github.com/domaindumper/domain-statistics/blob/main/LICENSE) file for details.

## Links

- [NPM Package](https://www.npmjs.com/package/domaindumper)
- [GitHub Repository](https://github.com/domaindumper/domain-statistics)
- [Official Website](https://www.domaindumper.com)
