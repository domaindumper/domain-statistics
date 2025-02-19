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