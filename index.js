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
        name: 'repositoryName',
        message: 'Give your repository a name',
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email'
    },
    // Description //
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
    //Table of contents//
    {
        type:'input',
        name:'installation',
        message:'Any commands necessary for installation?',
    },
    {
        type:'input',
        name:'license',
        message:'List any licenses for this project',
    },
    {
        type:'input',
        name:'contributers',
        message:'Were there any other contributers on this project?',
    },
    {
        type:'input',
        name:'tests',
        message:'Any tests?',
    },
    

])
.then(({ username, repositoryName, email, description, motivation, build, problem, learn, standOut, features, installation, license, contributers, tests}) => {
    // Use user feedback for... whatever!!

    const readMe = `

    # ${repositoryName}
    
    ## Description
    ${description}
    
    - ${motivation}
    - ${build}
    - ${problem}
    - ${learn}
    - ${standOut}
    - ${features}
    
    ## Table of Contents 
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    ${installation}
    
    ## License
    
    ${license}
      
    ## Contributing
    
    ${contributers}
    
    ## Tests
    
    To run tests, run the following command:
    
    ${tests}
    
    ## Questions
    
    
    If you have any questions about the repo, open an issue or contact ${username} directly at ${email}.
  `  
    
})


.catch(error => {
    if(error.isTtyError){
        // Promp couldn't be rendered in the current environment
    } else {
        //something else when wrong
    }
});