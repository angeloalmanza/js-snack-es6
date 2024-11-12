const squadre = [
    {nome : "Juventus", puntiFatti : 0, falliSubiti : 0},
    {nome : "Inter", puntiFatti : 0, falliSubiti : 0},
    {nome : "Milan", puntiFatti : 0, falliSubiti : 0},
    {nome : "Atalanta", puntiFatti : 0, falliSubiti : 0},
    {nome : "Fiorentina", puntiFatti : 0, falliSubiti : 0},
    {nome : "Lazio", puntiFatti : 0, falliSubiti : 0},
    {nome : "Roma", puntiFatti : 0, falliSubiti : 0},
];

/**
 * funzione che genera numeri casuali
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const numeriRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;;

// Numeri random per punti fatti e falli subiti
for(let i = 0; i < squadre.length; i++){
    const curSquadra = squadre[i];
    curSquadra.puntiFatti = numeriRandom(1, 100);
    curSquadra.falliSubiti = numeriRandom(1, 200);
}

// Array con nomi e falli subiti
const squadre2 = [];

for(let i = 0; i < squadre.length; i++){
    const curSquadra = squadre[i];
    squadre2.push({
        nome: curSquadra.nome,
        falliSubiti: curSquadra.falliSubiti
    });
}

console.log(squadre);
console.log(squadre2);