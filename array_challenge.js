// 1. Answer
const teaFlavors= ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];
console.log(firstTea);


// another method

let arrTea = new Array("green tea", "black tea", "oolong tea");
let TeaOne = arrTea[0];
console.log(TeaOne);

// 2. Answer

let teaType = new Array("white tea", "masala chai", "herbal tea");
teaType[1] = "jasmin Tea";
newArray = teaType;
console.log(newArray);

// 3. Cities Visited

let citiesVisited = ["mumbai", "sydney"];
citiesVisited = [...citiesVisited, 'berlin'];
console.log(citiesVisited)

// 5. shoftCopies

let popularTeas = new Array("green tea", "oolon tea", "chai");
let shoftCopy = popularTeas;
popularTeas.pop();
console.log(shoftCopy);
console.log(popularTeas);

// 6. HardCopies

let TopCities = new Array("burlin", "singapore","new york");
// let hardCopies = [...TopCities];
let hardCopies = TopCities.slice()
TopCities.pop();
console.log(TopCities);
console.log(hardCopies);

