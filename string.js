const name ="dattu"
const repoCount = 50

//console.log(name + repoCount + " value")

// console.log(`this is my name ${name} my repocount value is ${repoCount}`);

const gameName = new String("Rathod") // another way of creating a string 
//console.log(gameName);

// console.log(gameName.__proto__); // output : {} empty objects which contains lots of values 
// console.log(gameName.length); // gives the legth of the string 
// console.log(gameName.toUpperCase()); // convert the string into uppercase latters 
// console.log(gameName.toLowerCase()); // convert the string into the lowercase latters 
// console.log(gameName.charAt(4));     // checks the possition of a character inside the string 
// console.log(gameName.indexOf('T')); // it finds the index of the the given character inside the string 

const newString = gameName.substring(2,6) //  returns the substring  
 // console.log(newString) ->   (output:thod)

const newStringOne = gameName.slice(-7,3) // cuts the string 
console.log(newStringOne)   // output : Rat
 
const anotherString = "    whitespace  "
console.log(anotherString);
console.log(anotherString.trim());
/* output : 
    whitespace  
whitespace */

const url = "https://dattu.com20%dattugama"
console.log(url.replace('20%','-')); // output: https://dattu.com-dattugama

console.log(url.includes('dattu123')); // false 

console.log(gameName.split('--')); //it splits the given string and can give spaces between the each word  [ 'Rathod' ]
