# DomainDumper

[![npm version](https://badge.fury.io/js/domaindumper.svg)](https://www.npmjs.com/package/domaindumper)

A JavaScript library for accessing domain registration statistics via the DomainDumper API.

## Installation

```bash
npm install domaindumper
```

## Features

- Fetch registrar information
- Get TLD (Top Level Domain) details
- Access domain registration statistics
- Country-based domain statistics
- Registrar-based statistics
- TLD-based statistics

## Usage

```javascript
import { 
  getRegistrars, 
  getTldDetails, 
  getDomainStats 
} from 'domaindumper';

// Get registrars list
const registrars = await getRegistrars();

// Get TLD details for .com
const comDetails = await getTldDetails('com');

// Get domain stats for specific date
const stats = await getDomainStats('2024', '02', '19');
```

## API Reference

### Domain Service Methods

```javascript
// Get list of registrars
const registrars = await getRegistrars();

// Get detailed TLD information
const tldInfo = await getTldDetails('com');

// Get domain statistics for specific date
const stats = await getDomainStats('2024', '02', '19');
console.log(stats.countryStats);    // Country-based statistics
console.log(stats.registrarStats);  // Registrar-based statistics
console.log(stats.tldStats);        // TLD-based statistics
```

## Testing

The package includes comprehensive tests. Here's an example of our test suite:

```javascript
import DomainService from '../services/DomainService';

describe('DomainService', () => {
  test('fetchRegistrars returns registrar data', async () => {
    const data = await DomainService.fetchRegistrars();
    expect(data).toBeDefined();
  });

  test('fetchTldDetails returns TLD information', async () => {
    const data = await DomainService.fetchTldDetails('com');
    expect(data).toBeDefined();
  });

  test('fetchDomainStats returns all stats types', async () => {
    const stats = await DomainService.fetchDomainStats('2024', '02', '19');
    expect(stats.countryStats).toBeDefined();
    expect(stats.registrarStats).toBeDefined();
    expect(stats.tldStats).toBeDefined();
  });
});
```

To run tests:

```bash
npm test
```

## Development

### Setup
```bash
git clone https://github.com/yourusername/domain-statistics.git
cd domain-statistics
npm install
```

### Building
```bash
npm run build
```

## Error Handling

```javascript
try {
  const stats = await getDomainStats('2024', '02', '19');
} catch (error) {
  console.error('Error fetching domain stats:', error.message);
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@domaindumper.com or open an issue in our GitHub repository.

## Credits

Data provided by [DomainDumper](https://www.domaindumper.com)
