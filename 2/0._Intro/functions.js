
//Callback = anyFunctionReference is the callback function 
//The smart thing is to give behavior to a function, but not the answer. It is smart to forexample for interfaces 
function doActionWithSomeone (anyFunctionReference,name){
    anyFunctionReference(name)
}

const running = (name) => console.log(`${name} is running`)

doActionWithSomeone(running, 'Anders')

// Task implement passing + any action of your choosing
// Bonus task: Implement one of them to a one-liner


const passing = (name) => console.log(`${name} is passing`)

doActionWithSomeone(passing, 'Ines')

//Anonymous function and a lambda - both
doActionWithSomeone(name => console.log(`${name} is eating`),'Mette')