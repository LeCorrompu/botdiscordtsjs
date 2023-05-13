const exp = require('./exp.json');

//Système d'expérience
let addExp = Math.floor(Math.random() *5)+1;
if(!exp[message.auhtor.id]){
    exp[message.author.id]={
        exp: 0,
        niveau: 1
    };
}

let currentExp = exp[message.auhor.id].exp;
let currentNiv = exp[message.author.id].niveau;
let nextLevel = currentNiv * 15;
exp[message.author.id].exp = currentExp + addExp;
if(nextLevel <= currentExp){
    exp[message.author.id].niveau += 1;
    message.channel
        .send('Ce Bird vient de passé au niveau ${currentNiv + 1}!')
        .then(msg=>{
            msg.delete(5000);
        });
}

fs.writeFile('./exp.json', JSON.stringify(exp), err => {
    if(err) console.log(err);
});