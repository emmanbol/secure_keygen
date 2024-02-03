const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');
const ll = require('./pa3')

const kg = async() => {
    
    // @ts-ignore
    let tye = []

    for(let j=0; j<10; j++){

        let obj = new Object()
        
        //const mnemonic = bip39.generateMnemonic()
        const mnemonic = ll.roro()

        const hdwallet = hdkey.fromMasterSeed(await bip39.mnemonicToSeed(mnemonic.mnomic));

        const path = `m/44'/60'/0'/0/0`;
        const wallet = hdwallet.derivePath(path).getWallet();
        let privateKey = wallet.getPrivateKey().toString('hex')
        let address = wallet.getChecksumAddressString() //.toString('hex')}`;

        // @ts-ignore
        obj.counter = mnemonic.counter
        // @ts-ignore
        obj.mnemonic = mnemonic.mnomic
        // @ts-ignore
        obj.address = address
        // @ts-ignore
        obj.pkey = privateKey
        
        //mx = `Counter: ${mnemonic.counter}, Mnemonic: ${mnemonic.mnomic}, Address: ${address}, pkey: ${privateKey}`
        tye.push(obj)
    }
    
    return tye
}

// @ts-ignore
function a(v){console.log(v)}

module.exports = { kg }