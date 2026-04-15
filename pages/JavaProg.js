const { threadName } = require("worker_threads");

let text = "Monicka";
let vowel = "AEIOUaeiou";
let count ="";
for (ch of text){
    if (ch===vowel) {
        count = count+ch;
        console.log(count);

    }
}