"use strict";

/* J’ai un tableau avec les températures maximum des prochains jours en entrée de mon programme. Pour chaque température ex [17, 21], je veux afficher dans la console “17 degrés dans 1 jour”, “21 degrés dans 2 jours”.

Données de test :
[17, 21, 23]
[12, 5, -5, 0, 4] */


let maxTemps = [17, 21, 23];

function announceTemps(inputArray) {
  console.log(inputArray[0] + " dans " + 1 + " jour");
  for (let i = 1; i < inputArray.length; i ++) {
    console.log(inputArray[i] + " dans " + (i+1) + " jour");
  }
}

announceTemps(maxTemps);

maxTemps = [12, 5, -5, 0, 4];

announceTemps(maxTemps);