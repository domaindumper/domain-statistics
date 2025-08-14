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

describe('DomainService Registrar Methods', () => {
  test('getRegistrarsDetails should fetch registrar details', async () => {
    const data = await DomainService.getRegistrarsDetails();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('getRegistrarsList should fetch registrars list', async () => {
    const data = await DomainService.getRegistrarsList();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('should handle API errors', async () => {
    // Mock a failed request
    jest.spyOn(DomainService.client, 'get').mockRejectedValueOnce({
      response: {
        data: { message: 'API Error' }
      }
    });

    await expect(DomainService.getRegistrarsDetails()).rejects.toThrow('API Error');
  });
});

describe('DomainService TLD Methods', () => {
  test('getTldsList should fetch TLDs list', async () => {
    const data = await DomainService.getTldsList();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
  });

  test('should handle TLD list API errors', async () => {
    jest.spyOn(DomainService.client, 'get').mockRejectedValueOnce({
      response: {
        data: { message: 'Failed to fetch TLD list' }
      }
    });

    await expect(DomainService.getTldsList()).rejects.toThrow('Failed to fetch TLD list');
  });
});