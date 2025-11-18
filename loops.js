let Teas = ['green tea', 'black tea', 'chai', 'oolong tea'];

let selectedTeas = [];
for(i=0; i<=Teas.length; i++){
    if(Teas[i]=='chai'){
        break;
    }
    selectedTeas.push(Teas[i]);
}
console.log(selectedTeas);