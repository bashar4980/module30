// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const numbers = [1 , 2 , 3, 4, 6, 8, 5, 4]

const getSqure =  numbers =>{

    let squreValue = 0
   for(let number of numbers){
    squreValue += number*number
    
   }
   return squreValue ;
}
console.log(getSqure(numbers)) ;

const getValue = numbers.reduce((value , number)=>{
    const total = value + (number*number)
    return total
}, 0)
console.log(getValue)