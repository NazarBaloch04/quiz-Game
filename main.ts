#!/usr/bin/env node
import inquirer from "inquirer"
import { listenerCount } from "process"

async function AskQuestion(){
    const answers = await inquirer.prompt([{
        type: "list",
        name: "question1",
        choices: ["MetaForce", "EBL", "Forex", "Amazon", "Microsoft", "Oracle", "Typescript"],
        message: "  Which of the following companies has designed Typescript?"
    },
{
    type: "list",
    name: "question2",
    choices: ["Dynamic", "static", "Duck", "A.O.T"],
    message: "what is the typing principal of typescript:?",
},
{
    type: "list",
    name: "question3",
    choices: [".doc", ".html", ".js", ".ts"],
    message: "Which of the following is the extension of typescript?"
},
])
const marks = 20
const fail = 0
if(answers.question1 === "Microsoft" ){
    console.log("Asnwer is Correct");
    
}else()=> {
    console.log("You choosed wrong Answer");  
}
if(answers.question2 === "Dynamic"){
    console.log("Asnwer is Correct");
    
}
else{
    console.log("You choosed wrong Answer");    
}if(answers.question3 === ".ts"){
    console.log("Asnwer is Correct");
    
}
else{
    console.log("You choosed wrong Answer");    
}
}
AskQuestion()

