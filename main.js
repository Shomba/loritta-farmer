const fetch = require("node-fetch")
const conf = require("./conf.json")
var char = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ç',
    'ç', '?', '!', '*', '**', '||', ' ','<','>'
]
console.log(char.length)
async function farmar() {
    while (true) {
        var msg = ""
        for (let index = 0; index < 245; index++) {
            var rand = Math.floor(Math.random()*char.length)
            msg += char[rand]
            await sleep(50)
            console.log(msg+" : "+msg.length)
        }
        fetch(`https://discord.com/api/v9/channels/${conf.chid}/messages`, {
            "headers": {
                "authorization": conf.token,
                "content-type": "application/json",},
            "body": `{"content":"${msg}"}`,
            "method": "POST",
            "mode": "cors"
        }).then(function (responsse) {
            console.log(responsse.status)
        })
    }
}
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
farmar()
