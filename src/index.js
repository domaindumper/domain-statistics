import DomainService from './services/DomainService';
import { formatDate } from './utils/dateFormatter';

export const getRegistrars = () => DomainService.fetchRegistrars();
export const getRegistrarsDetails = async () => {
  return await DomainService.getRegistrarsDetails();
};
export const getRegistrarsList = async () => {
  return await DomainService.getRegistrarsList();
};
export const getRootDatabase = () => DomainService.fetchRootDatabase();
export const getTldDetails = (tld) => DomainService.fetchTldDetails(tld);
export const getDomainStats = (year, month, date) => DomainService.fetchDomainStats(year, month, date);
export const getTldsList = () => DomainService.fetchTldsList();

export { formatDate };

export default {
  getRegistrars,
  getRegistrarsDetails,
  getRegistrarsList,
  getRootDatabase,
  getTldDetails,
  getDomainStats,
  getTldsList,
  formatDate
};