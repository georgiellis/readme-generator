var fs = require("fs");
var inquirer = require("inquirer")

inquirer
.prompt ([
    {
        type:'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type:'input',
        name: 'repository',
        message: 'Give your repository a name',
    },
    {
        type:'input',
        name:'description',
        message: 'Describe your project',
    },
    {
        type:'input',
        name:'motivation',
        message:'What was your motivation behind creating this project?',
    },
    {
        type:'input',
        name:'build',
        message:'Why did you build this project?',
    },
    {
        type:'input',
        name:'problem',
        message:'What problem does it solve?',
    },
    {
        type:'input',
        name:'learn',
        message:'What did you learn?',
    },
    {
        type:'input',
        name:'standOut',
        message:'What makes your project stand out?',
    },
    {
        type:'input',
        name:'features',
        message:'Does your project have any features you would like to highlight?',
    },
    {
        type:'input',
        name:'installation',
        message:'Any commands necessary for installation?',
    },
    {
        type:'input',
        name:'license',
        message:'List any licenses for this project',
    }
    {
        type:'input',
        name:'contributers',
        message:'Were there any other contributers on this project?',
    },
    {
        type:'input',
        name:'tests',
        message:'Any tests?',
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