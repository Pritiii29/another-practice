// function stringToNumber(input) {
//     const number = Number(input);
//     if(!number){
//         return `Not a number`
//     }
//     else{}
//     return number;
// }
// console.log(stringToNumber("1234"));
// console.log(stringToNumber(1234));
// console.log(stringToNumber({}));



// function flipBoolean(input){
//    return !(input);
// }
// console.log(flipBoolean(true));
// console.log(flipBoolean(false));
// console.log(flipBoolean(0));
// console.log(flipBoolean(1));



// function whatAmi(input){
//     const type = typeof input;
//     if(type === 'number'){
//         return 'its a number';
//     }else if(type === 'string'){
//         return 'its a string type'
//     }else{
//         return `type of string is ${type}`;
//     }
// }
// console.log(whatAmi(12334455));
// console.log(whatAmi('12334455'));
// console.log(whatAmi({}));
// console.log(whatAmi([]));
// console.log(whatAmi(124.678));
// console.log(whatAmi());



function isItTruthy(input){
    const value = true;
    if(input == true){
    return 'its truth!'
    }else{
        return 'its falsey!'
    }
}
console.log(isItTruthy(0));
console.log(isItTruthy(1));
console.log(isItTruthy(true));