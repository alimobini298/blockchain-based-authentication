const path = require("path");
const HDWalletProvider = require('./client/node_modules/@truffle/hdwallet-provider');
require('./client/node_modules/dotenv').config();

const MNEMONIC = process.env.REACT_APP_MNEMONIC;
const RINKEBY_KEY = process.env.REACT_APP_RINKEBY_KEY;

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${RINKEBY_KEY}`),
      network_id: 4,
      gas: 4500000
    },
    testnet: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://data-seed-prebsc-2-s3.bnbchain.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.bnbchain.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.6"
    }
  }

};
