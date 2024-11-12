const bici = [
    {nome: "Bici da corsa 1", peso: 23},
    {nome: "Bici da corsa 2", peso: 57},
    {nome: "Bici da corsa 3", peso: 68},
    {nome: "Bici da corsa 4", peso: 12},
    {nome: "Bici da corsa 5", peso: 94},
    {nome: "Bici da corsa 6", peso: 36},
];

let pesoMin = bici[0].peso;
let biciLeggera = bici[0];

for(let i = 0; i < bici.length; i++){
    const curItem = bici[i];
    if(curItem.peso < pesoMin){
        pesoMin = curItem.peso;
        biciLeggera = curItem;
    }
}

console.log(biciLeggera);