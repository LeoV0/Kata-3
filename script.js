const calendrierDuCrayon = {
  septembre: 10,
  octobre: 9,
  novembre: 8,
  decembre: 7,
  janvier: 6,
  fevrier: 5,
  mars: 4,
  avril: 3,
  mai: 2,
  juin: 1,
};

// const tousLesMois = Object.keys(calendrierDuCrayon);
//   console.log(tousLesMois);

const hautDuCrayon = `  /\\ \n /__\\`;
const crayon = " ||||";
const gommeBase = " |__|";
// const gommeUnEtage = " |__|";
const gommeDeuxEtage = " |__| \n |  | \n |__|";

function recupMois(mois) {
  // console.log(calendrierDuCrayon[mois]); // Retourne 10 avec septembre
  console.log(hautDuCrayon);
  for (let i = 0; i < calendrierDuCrayon[mois]; i++) {
    console.log(crayon);
  }
  // console.log(calendrierDuCrayon[mois]);
  if (calendrierDuCrayon[mois] > 4) {
    console.log(gommeBase);
  } else {
    console.log(gommeDeuxEtage);
  }
}
recupMois("octobre");

// la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars.

// retourne un crayon à 10 étages avec une gomme à 2 étages
//  /\
// /__\
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// |__|
// |  |
// |__|

// const found = calendrierDuCrayon.find((element) => element > 5);

// console.log(found);
