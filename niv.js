const Discord = require('discord.js');
const exp = require('../exp.json');

module.exports.run = async(bot,message, args) =>{
    if(!exp[message.auhtor.id]){
        exp[message.author.id]={
            exp: 0,
            niveau: 1
        };
    }
    
    let cExp = exp[message.auhor.id].exp;
    let cNiv = exp[message.author.id].niveau;
    let nextLevelUp = currentNiv * 15;
    let expNeededForLevelUp = nextLevelUp - cExp;
    let nivEmbed = new Discord.Richembed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor('#dc143c')
        .addField('Niveau', cNiv, true)
        .addField('Expérience', cExp, true)
        .setFooter(
            `${expNeededForLevelUp} points d'expériences requis pour le prochain niveau.`
        );
    message.channel.send(nivEmbed);

};

module.exports.help ={
    name: 'niv'
};