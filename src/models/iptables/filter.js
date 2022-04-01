var sql = require('../db/db_mariadb');

var connexion = null;

class Filter {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    connexion = new sql();

  }
  async initialize() {
    await connexion.startConnexion();

  }

  async getFilterList() {
    try {
      this.filterList = await connexion.query("SELECT idNat, name, portSrc, portDst,ipAddressSrc, ipAddressDst, type FROM nat_filter");

      return this.filterList;
    }
    catch (anError) {
      console.log('Error to get filter list !');

      // See error from SQL Client
      //console.log(anError);
    }
  }
  getfilter() {
    return this.filerList;
  }
}

module.exports = Filter;
