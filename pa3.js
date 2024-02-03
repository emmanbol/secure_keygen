const bip39 = require('bip39')

const wordy = require('./wordlist/wordlist.json');

function bar(){
    try{
        let kmp = shuffleOne(wordy)
        let bb = "";
        for(let a=0; a<12; a++){

            let tru = randRange()

            if(a == 11)
                bb += kmp[tru];
            else
                bb +=  kmp[tru]+ " ";
        }
        return bb
    }
    catch(err){
        a(err)
    }
    
}

function roro(counter2 = 0){
    while(true){
        let data = bar()
        let vv = bip39.validateMnemonic(data)
        counter2 += 1
        if(vv)
            return {"counter":counter2, "mnomic":data}
    }
}

function randRange(){
    let min = 1, max = 2048;
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffleOne(data){
    return data.sort(() => Math.random() - 0.5)
}

function a(v){console.log(v)}

module.exports = { roro }