var express = require('express');
const { StreamClient } = require("cw-sdk-node");
const keys = require("../secret")
var router = express.Router();
class CurrencyWS {
  publicKey = keys.publicKey
  secretKey = keys.secretKey
  streamClient

  constructor() {
    this.streamClient = new StreamClient({
      creds: {
        apiKey: this.publicKey,
        secretKey: this.secretKey
      },
      subscriptions: [
        "markets:87:trades", // kraken btc:usd
        "pairs:9:performance", // btc/usd pair
        "markets:1:trades"
      ],
      logLevel: "debug"
    })
    this.streamClient.connect()
    this.streamClient.onConnect(() => {
      setTimeout(() => {
        this.streamClient.disconnect()
      }, 15000)
    })
    this.streamClient.onMarketUpdate(data => {
      console.log(data)
    })
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  const client = new CurrencyWS()
  res.render('index', { title: 'Express' });
});

module.exports = router;


