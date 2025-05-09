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
// console.log(tousLesMois);
// console.log(calendrierDuCrayon[mois]); // Retourne 10 avec septembre

function drawMyPen(mois) {
  const hautDuCrayon = `  /\\ \n /__\\`;
  const crayon = " ||||";
  const gommeBase = " |__|";
  const gommeDeuxEtage = " |__| \n |  | \n |__|";

  console.log(hautDuCrayon);
  for (let i = 0; i < calendrierDuCrayon[mois]; i++) {
    console.log(crayon);
  }
  if (calendrierDuCrayon[mois] > 4) {
    console.log(gommeDeuxEtage);
  } else {
    console.log(gommeBase);
  }
  console.log(gommeBase);
}
drawMyPen("septembre");
