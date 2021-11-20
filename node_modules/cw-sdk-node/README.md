# Cryptowatch NodeJS SDK

The Cryptowatch NodeJS SDK enables you to stream, trade, and access data using the Cryptowatch WebSocket and REST APIs. 
Trading over WebSockets is in beta, and not available to the public yet.

## API documentation:

- REST API: https://cryptowat.ch/docs/api
- WebSocket API: https://cryptowat.ch/docs/websocket-api

## Install
```
npm i cw-sdk-node
```

## Usage

### StreamClient
The following code connects to the stream api and listens for market and pair data for `btc:usd`.
```javascript
const { StreamClient } = require("cw-sdk-node");

const client = new StreamClient({
  creds: {
    apiKey: "", // your cw api key
    secretKey: "" // your cw secret key
  },
  subscriptions: [
    "markets:87:trades", // kraken btc:usd
    "pairs:9:performance", // btc/usd pair
    "markets:1:trades"
  ],
  logLevel: "debug"
});

// Handlers for market and pair data
client.onMarketUpdate(marketData => {
  console.log(marketData);
});
client.onPairUpdate(pairData => {
  console.log(pairData);
});

// Error handling
client.onError(err => {
  console.error(err);
});

// You can also listen on state changes
client.onStateChange(newState => {
  console.log("connection state changed:", newState);
});

client.onConnect(() => {
  console.info("streaming data for the next 15 seconds...");
  setTimeout(() => {
    client.disconnect();
  }, 15 * 1000);
});

client.onDisconnect(() => {
  console.log("done");
});

// Connect to stream
client.connect();
```

More details can be found in our [StreamClient Documentation](./docs/classes/streamclient.md)


### RESTClient

To use your REST api data allowance, you will need to pass your cryptowat.ch API key to the RESTClient constructor.

```javascript
const { RESTClient } = require("cw-sdk-node");

const client = new RESTClient({
  creds: {
    apiKey: "" // your cw api key
  }
});

// All requests return promises that return the formatted API data.
client.getExchanges().then((response) =>{
    let exchanges = response.result;
});
```

More details can be found in our [RESTClient Documentation](./docs/classes/restclient.md)


## Testing
Tests are written using `jest`. Run tests with:
```
make test
```

## License
[BSD-2-Clause](LICENSE)
