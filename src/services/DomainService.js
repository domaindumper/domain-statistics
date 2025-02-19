import axios from 'axios';

class DomainService {
  constructor() {
    this.baseURL = 'https://statistics.domaindumper.com/api/v1';
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000
    });
  }

  async fetchRegistrars() {
    const response = await this.client.get('/registrar/registrars.json');
    return response.data;
  }

  async fetchRegistrarsDetails() {
    const response = await this.client.get('/registrar/registrars-details.json');
    return response.data;
  }

  async fetchRootDatabase() {
    const response = await this.client.get('/root/db.json');
    return response.data;
  }

  async fetchTldDetails(tldName) {
    const response = await this.client.get(`/root/detail/${tldName}/${tldName}.json`);
    return response.data;
  }

  async fetchDomainStats(year, month, date) {
    const dateStr = `${year}/${month}/${date}`;
    const [countryStats, registrarStats, tldStats] = await Promise.all([
      this.client.get(`/stats/${dateStr}/country.json`),
      this.client.get(`/stats/${dateStr}/registrar.json`),
      this.client.get(`/stats/${dateStr}/stats.json`)
    ]);

    return {
      countryStats: countryStats.data,
      registrarStats: registrarStats.data,
      tldStats: tldStats.data
    };
  }

  async fetchTldsList() {
    const response = await this.client.get('/tlds/tlds_list.json');
    return response.data;
  }
}

export default new DomainService();