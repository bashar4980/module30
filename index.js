// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const getMultiply  = (a , b , c)=> a * b * c ;
console.log(getMultiply(10 , 10 , 10));

//Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const passageText = `I am a web developer.
I love to code .
I love to eat biryani.`;

console.log(passageText);

// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const getAddition = (a , b = 0)=> a + b ;
console.log(getAddition(10));
