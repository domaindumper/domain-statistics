import axios from 'axios';

const BASE_URL = 'https://statistics.domaindumper.com/api/v1';

class DomainAPI {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Registrar Operations
  async getRegistrarsList() {
    return this.client.get('/registrar/registrars.json');
  }

  async getRegistrarsDetails() {
    return this.client.get('/registrar/registrars-details.json');
  }

  // Root Operations
  async getRootDatabase() {
    return this.client.get('/root/db.json');
  }

  async getTldDetails(tldName) {
    return this.client.get(`/root/detail/${tldName}/${tldName}.json`);
  }

  // Stats Operations
  async getCountryStats(year, month, date) {
    return this.client.get(`/stats/${year}/${month}/${date}/country.json`);
  }

  async getRegistrarStats(year, month, date) {
    return this.client.get(`/stats/${year}/${month}/${date}/registrar.json`);
  }

  async getTldStats(year, month, date) {
    return this.client.get(`/stats/${year}/${month}/${date}/stats.json`);
  }

  // TLDs List
  async getTldsList() {
    return this.client.get('/tlds/tlds_list.json');
  }
}

export default new DomainAPI();