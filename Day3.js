//  Write a function calculateDiscount that takes two
// parameters: price and discount (with a default value of 10). The function should
// return the final price after applying the discount

function calculateDiscount(price, discount=10){
    let finalprice= price-(price*discount/100);
    console.log(finalprice);
}

let price=1200;
let discount;
calculateDiscount(price,discount);



// Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator


function mergeArrays(arr1,arr2){
    let mergedArray=[...arr1];
    mergedArray.push(...arr2);
    console.log(mergedArray);
}

let arr1=[12,23,24];
let arr2=[45,65,76];
mergeArrays(arr1,arr2);


// Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments.


function logArguments(a,b,c,...rest){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(...rest);
}
let a=12;
let b=23;
let c=65;
let d=76;
let r=867;
logArguments(a,b,c,d,r);





// Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name.

function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

const defaultMsg = "Hello";
const messages = createMessage(defaultMsg, "Alice", "Bob", "Charlie");
console.log(messages);


// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers


function sum(a,b,c){
    let sum=a+b+c;
    console.log(sum);
}
let numbers=[12,23,45];
sum(...numbers);