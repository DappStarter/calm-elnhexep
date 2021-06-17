require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food fine damp pave pyramid grace light army genius'; 
let testAccounts = [
"0x246dac631e23053ebc20602251fdab2ac98bead6223e7b54f8c35dadb41ab41a",
"0x29088db13be046c81558c7a3a3f430b851ab3af0e1b5d8939d97243d28dde0c0",
"0xbbd2243ef10ce1da37cfddd21383ff289410ef5a91c61c25dfab6124a63552e8",
"0x1e73cd78bdfaf1a636d664467ad40aa77bd8fa27828043a101f1e43edf33b39c",
"0x66bab0876b7ad94f86dfaa6c579c4ef2ade936cbad54b65f5a2629fb37e6e1c4",
"0xfeb0cbf6b8f2eadd6c75637761b07f76578894f09b329c5f7a79f69acb6c21c1",
"0x4ca3e4c6a9bed0623cb717c7553050c912f3c19565df70c968c433da63132aee",
"0x2c2a10d1ce189d1d857d46ac27f60d786e4e13d10c372e59abf3f3feeb905004",
"0xfa4aa9ab446f1d17812f6ebe8bad865e1bc53fd0db4f87f482b1a2c261b13f0d",
"0x80871483443d7c3282578dbf171f750f368337aea718c8b94ac8f422d92cd573"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

