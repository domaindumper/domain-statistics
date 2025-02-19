import {
  getRegistrarsList,
  getTldDetails,
  getDomainStats,
  formatDate
} from '../src/index';

describe('Domain Statistics API', () => {
  test('getRegistrarsList returns registrar data', async () => {
    const data = await getRegistrarsList();
    expect(data).toBeDefined();
  });

  test('getTldDetails returns specific TLD information', async () => {
    const data = await getTldDetails('com');
    expect(data).toBeDefined();
  });

  test('getDomainStats returns statistics for specific date', async () => {
    const date = new Date();
    const { year, month, day } = formatDate(date);
    const stats = await getDomainStats(year, month, day);
    
    expect(stats.countryStats).toBeDefined();
    expect(stats.registrarStats).toBeDefined();
    expect(stats.tldStats).toBeDefined();
  });
});