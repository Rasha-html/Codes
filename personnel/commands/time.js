
const Discord = require(`discord.js`);
const timerLib = require(`easytimer.js`).Timer;
exports.run = async (client, message, args) => {
  //RASHA CODE - DON'T TOUCH UNTIL FURTHER NOTICE
  /*
  var ms = require('ms')
  { //bot = client, msg = message, params = args

    let time = args[0];

    if (!args[0]) {
      return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
    }


    if (args[0] >= 0) {
      return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
    }


    message.channel.send(`${ms(ms(time), { long: true })} left`)
    //IL FAUT METTRE DES NOMS DE VARIABLES QUI SONT PARLANT, I ET A TU SAURAS PAS C QUOI DANS 3 SEMAINES !!!!!!!!
    // OKKKKKKKK CHILLLLL JIFUHAYQSJHBCI UFJYZEGQS VCDGJZS CHANGE LES ALORS MDR
    //JESSAYE DE LIRE LE CODE JUSTEMENT U_U ( j'ai 37 ans j'utilsie des smileys)U<odkz javoue ptddrr
    // boloss
    //MON TERMINAL EST CASSE SA MERE

    // la partie en dessous ne sert à rien 
    var i = 0;
    var a = setInterval(function () {

      if (i === 3) {
        clearInterval(a);
      }
      else {
        message.channel.edit(message.author.toString() + ' ' + (30 * (i + 1)) + ' left')
        i++;
      }
    }
      , 30 * 1000);
    // jusqu'à ici : inutil

    setTimeout(function () {
      message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(time), { long: true })}`)

    }, ms(time));
  };*/

  /**************************************************
   * HUGO CODE - MIGHT BE SHIT NOW BUT WAIT AND SEE *
   **************************************************/

  //RETRIEVE USER WHO STARTED THE COUNTDOWN
  let user = message.author.tag;
  //RETRIEVE COMMAND ARGS
  let userArg = args[0];
  //SET UP COUNTDOWN VARIABLES
  let daysLeft = hoursLeft = minutesLeft = secondsLeft = 0;
  //REGEX TO CHECK WHAT THE USER PASS IN COMMANDS ARGS
  let regx = /(\d*)d|(\d*)h|(\d*)m|(\d*)s/g;
  //CHECK TO FIND IF THERE IS ANY COMMANDS ARGS MATCHING REGEX 
  let countDownChoosen = userArg.match(regx);

  //CHECK EACH VALUE THAT MACH REGEX
  //TODO => MUST USE SWITCH STRUCTURE FOR CLEAN CODE
  countDownChoosen.forEach(value => {
    //RETRIEVE KEYWORD AT THE END OF NUMBER TYPED 
    let end = value.charAt(value.length - 1);
    //CASE WHEN THERE IS A VALUE SET FOR DAYS
    if (end === 'd') {
      //RETRIEVE DAYS
      daysLeft = value.slice(0, value.length - 1);
      return;
    }
    //CASE WHEN THERE IS A VALUE SET FOR HOURS
    if (end === 'h') {
      //RETRIEVE HOURS
      hoursLeft = value.slice(0, value.length - 1);
      return;
    }
    //CASE WHEN THERE IS A VALUE SET FOR MINUTES
    if (end === 'm') {
      //RETRIEVE MINUTES
      minutesLeft = value.slice(0, value.length - 1);
      return;
    }
    //CASE WHEN THERE IS A VALUE SET FOR SECONDS
    if (end === 's') {
      //RETRIEVE SECONDS
      secondsLeft = value.slice(0, value.length - 1);
      return;
    }

  })

  //DEFINE A TIMER THANKS TO EASYTIMER.JS
  // SEE MORE HERE => https://www.npmjs.com/package/easytimer
  // INSTALL WITH FOLOWING COMMAND : npm install easytimer

  //FYI => KEYWORD 'NEW' MEANS THAT YOU INSTANCIATE AN OBJECT OF TYPE TIMERLIB
  //WHICH IS IN FACT EASYTIMER SO NOW I CAN CALL ALL THE METHODS DEFINED IN EASYTIMER LIB

// # => c'est pour faire reference a un id en html/css
// . => fais reference a une class en css/html
// .html ca veut dire tu vas ecrire a l'endroit ou y'a l'id et la classe defini, la valeur du timer. tu ecris dans le html c le fichier

  let timer = new timerLib();

  timer.start({
    countdown: true,
    startValues: {
      seconds: secondsLeft
    },
    precision: 'seconds'
  });

  //DEFINE AN EMPTY EMBED MESSAGE VARIABLE
  let embedTimerMessage;

  //SENDING AN EMBED MESSAGE THAT WE WILL UPDATE EACH TIME AN EVANT IS TRIGGERED
  message.channel.send({
    embed: new Discord.MessageEmbed()
    .setFooter("Rasha is amazing")
    .setColor("#FF0000")
    .setTimestamp()
    .setTitle(args[1])
    .setDescription(`Time left - **${daysLeft} days**, **${hoursLeft} hours**, ${minutesLeft} minutes and ${secondsLeft} seconds`)
    .setAuthor(`Timer started by ${user}`)
  }).then( m => embedTimerMessage = m);

  //CATCHING TIMER COUNTDOWN EVENTS WHEN DAYS, HOURS, MINUTES ARE CHANGING

  //WHEN SECONDS ARE CHANGING
  timer.on('secondsUpdated', () => {
    secondsLeft = timer.getTimeValues().seconds;
    console.log(`there is ${secondsLeft} remaining`);
    //WE EDIT THE EMBED MESSAGE TO DISPLAY THE SECONDS REMAINING 
    embedTimerMessage.edit( {
      embed: new Discord.MessageEmbed()
      .setFooter("Rasha is amazing")
      .setColor("#FF0000")
      .setTimestamp()
      .setTitle(args[1])
      .setDescription(`Time left - ${secondsLeft} seconds`)
      .setAuthor(`Timer started by ${user}`)
    });
  });
  /*
  //WHEN MINUTES ARE CHANGING
  timer.on('minutesUpdated', () => {
    minutesLeft = timer.getTimeValues().minutes;
    //WE EDIT THE EMBED MESSAGE TO DISPLAY THE MINUTES REMAINING
    embedTimerMessage.edit( {
      embed: new Discord.MessageEmbed()
      .setFooter("Rasha is amazing")
      .setColor("#FF0000")
      .setTimestamp()
      .setTitle(args[1])
      .setDescription(`Time left - **${daysLeft} days**, **${hoursLeft} hours**, ${minutesLeft} minutes and ${secondsLeft} seconds`)
      .setAuthor(`Timer started by ${user}`)
    });
  });
  //WHEN HOURS ARE CHANGING
  timer.on('hoursUpdated', () => {
    hoursLeft = timer.getTimeValues().hours;
    //WE EDIT THE EMBED MESSAGE TO DISPLAY THE HOURS REMAINING
    embedTimerMessage.edit( {
      embed: new Discord.MessageEmbed()
      .setFooter("Rasha is amazing")
      .setColor("#FF0000")
      .setTimestamp()
      .setTitle(args[1])
      .setDescription(`Time left - **${daysLeft} days**, **${hoursLeft} hours**, ${minutesLeft} minutes and ${secondsLeft} seconds`)
      .setAuthor(`Timer started by ${user}`)
    });
  });
   //WHEN DAYS ARE CHANGING
   timer.on('daysUpdated', () => {
    daysLeft = timer.getTimeValues().days;
     //WE EDIT THE EMBED MESSAGE TO DISPLAY THE DAYS REMAINING
    embedTimerMessage.edit( {
      embed: new Discord.MessageEmbed()
      .setFooter("Rasha is amazing")
      .setColor("#FF0000")
      .setTimestamp()
      .setTitle(args[1])
      .setDescription(`Time left - **${daysLeft} days**, **${hoursLeft} hours**, ${minutesLeft} minutes and ${secondsLeft} seconds`)
      .setAuthor(`Timer started by ${user}`)
    });
  });*/
  timer.on('targetAchieved', () => {
    message.reply(`The reminder titled \`${args[1]}\` has finished!`);
  });

}
