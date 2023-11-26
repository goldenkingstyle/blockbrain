const axios = require("axios");

class cryptoContoller {
  async getAddress(req, res) {
    const { address } = req.query;

    const json = await axios
      .get(`https://blockchain.info/rawaddr/${address}`)
      .then((response) => response.data);

    res.json(json);
  }
}

module.exports = new cryptoContoller();
