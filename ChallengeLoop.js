// store array element into a array stop according to the conditions

// let Teas = ["green tea", "black tea", "oolong tea", "chai", "masala "];
// let newFavChai = [];
// for(i =0; i<= Teas.length; i++){
//     if(Teas[i] == "chai"){
//         break;
//     }
//     newFavChai.push(Teas[i]);
// }
// console.log(newFavChai);

// write a 'for' loop that loopa through an array skip "paris" and store all the remaining cities

// let City = ["London", "Parish", "New York", "Berlin", "Kota", "Briten"];
// let NewCity = [];
// for(i = 0; i<= City.length-1; i++){
//     if(City[i] == "Parish"){
//         continue;
//     }
//     NewCity.push(City[i]);
// }
// console.log(NewCity);

// use a 'for of' loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found store the number before 4.

// let Numbers = [1,2,3,6,8,4,9,10,4,11,56,4];
// let SmallNumber = [];
// for(const num of Numbers){
//     if(num == 4){
//         continue;
//     }
//     SmallNumber.push(num);
// }
// console.log(SmallNumber);

/* forIn loop
 use a forin loop to loop through an object containing city population
 Stop the loop when the population of "berlin" found and store all the previous cities in a new object named
 CityPopulations
 */

// let citiesPopulations = {
//   "london": 890000,
//   "NewYork": 450000,
//   "Briten": 670000,
//   "parish": 300000,
//   "berlin": 90000,
// };
// let NewObject = {};
// for(let city in citiesPopulations){
//     if(city == "Briten"){
//         continue;
//     }
//     NewObject[city] = citiesPopulations[city];
// }
// console.log(NewObject);




// forEach loop for practice.

// stop the loop when chai is found and store all previous tea type in an array.

let typeOfTea = ["earl grey", "green tea", "chai","oolong tea"];
let availableTeas = [];

typeOfTea.forEach((tea) => {
    if(tea === 'chai'){
        return;
    }
    availableTeas.push(tea);
    console.log(tea);
})
console.log(availableTeas);