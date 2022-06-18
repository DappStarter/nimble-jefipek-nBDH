require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan release night snake idea clip slot gauge'; 
let testAccounts = [
"0xd719f17c062b72db269626c77cbebb979bfa28871dd1b8e93a20d90e60f1ac3c",
"0xd9023275820e13ae8ce41b2557311c8b548882a173ee16a8520ba1909dfabbb1",
"0x65b173184e164b5f848751ca8df2a630d3d003eb48a4135332a49280758ff929",
"0x72935563458e0ff74a5b36864ad496e1ceda749bf088bd2b49ff2a0f9cee148a",
"0x7d7c53cc15a67a902bb8dca82ae916aaa35100276911c7e895a612c9fdadf5cb",
"0xdf6db70b503c4b9020072fb9e188ee9dac2100d8d656492906b7a462ecd22127",
"0x3c8e7d3841504dc0c3889772840c1310d6143a8b114ae61127e7da8eb9a89731",
"0x30d145af999097e7635557cc0964769b3629b3e66ef9a2e5c9a1a4dd5e610430",
"0xf43b7ad2d8296efd12ad9a455146ca7d18eabe5d89dcdfc63a9afdcfc37d254c",
"0x6cfccd5eaf7f4370e4e2308b8544359ad74fd31a7e292e5e6838d42891fb7fc5"
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

