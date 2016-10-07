var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message2 = chalk.red("Look") + chalk.blue("at") + chalk.green("all") + chalk.bgGreen("the")
  + chalk.red.bgGreen("pretty") + chalk.blue.underline("colours!");
console.log(message2);
console.log(chalk.supportsColor);