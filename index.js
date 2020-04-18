var fs = require("fs");
var inquirer = require("inquirer")

inquirer
.prompt ([
    {
        type:'input',
        name: 'username',
        message: 'What is your username?'
    },
    {
        type:'input',
        name: 'repository',
        message: 'What is the repository name?',
    }
])
.then(answers => {
    // Use user feedback for... whatever!!
})
.catch(error => {
    if(error.isTtyError){
        // Promp couldn't be rendered in the current environment
    } else {
        //something else when wrong
    }
});