
let dragon = {
    name: "Mirdim",
    pointsDeVie: 1500,
    precision: 30/100,       // precision entre 0 et 1
    force: 125,
    critRate: 30/100, 
}

let sorcier = {
    name: "Grim",
    pointsDeVie: 750,
    precision: 75/100,      // precision entre 0 et 1
    force: 105,
    critRate: 70/100,
}
const combatant = [dragon, sorcier]
function touche(precision) {
    return Math.random() <= precision;
}
function critRate(tauxCritique) {
    return Math.random() <= tauxCritique;
}

function degat(attaquant, adversaire) {
    if (touche(attaquant.precision)) {
        adversaire.pointsDeVie -= attaquant.force;
        console.log(`${attaquant.name} touche ${adversaire.name} (-${attaquant.force} PV)`);
        let degats = attaquant.force;

        if (critRate(attaquant.critique)) {
            degats *= 2;
            console.log("💥 COUP CRITIQUE !");
        }
    } else {
        console.log(`${attaquant.name} rate son attaque`);
    } 
}

console.log(`Début du combat entre ${dragon.name} et ${sorcier.name}\n !!`);

while (dragon.pointsDeVie > 0 && sorcier.pointsDeVie > 0) {
    degat(dragon, sorcier);
    if (sorcier.pointsDeVie <= 0) break;

    degat(sorcier, dragon);
    console.log(`PV → ${dragon.name}: ${dragon.pointsDeVie} | ${sorcier.name}: ${sorcier.pointsDeVie}\n`);
}

//Résultat du combat (roulement_de_tambour.mp3)
const gagnant = dragon.pointsDeVie > 0 ? dragon.name : sorcier.name;
console.log(`🏆 Fin du combat ! Le gagnant est : ${gagnant}`);