"use strict";

/* 🏁 Exercice 1
Tâches :
Créer un tableau de joueurs pour chaque équipe (variables ‘players1’ et ‘players2’). ✓
Le premier joueur dans un tableau de joueurs est le gardien et les autres sont des joueurs de terrain. Pour l’équipe 1 (le Bayern de Munich), créer une variable ‘gk’ avec le nom du gardien et un tableau ‘fieldPlayers’ avec le reste des joueurs de l’équipe. ✓
Créer un tableau ‘allPlayers’ qui contient les joueurs de chaque équipe (22 joueurs). ✓
Pendant le match, le Bayern utilise 3 joueurs remplaçants. Créer un autre tableau ‘players1Final’ contenant tous les joueurs de l’équipe originelle ainsi que ‘Thiago’ ‘Coutinho’ et ‘Perisic’. ✓
Basé sur l’objet game.odds, créer une variable pour chaque probabilité (appelés ‘team1’, ‘draw’ et ‘team2’). ✓
Écrire une fonction ‘printGoals’ qui prends un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts. ???
L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner. ✓
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let players1 = game.players[0];
let players2 = game.players[1];
let gk = game.players[0][0];
let fieldPlayers = [...players1];
let allPlayers = [...players1, ...players2]
fieldPlayers.shift();
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
/* function printGoals() {
  no idea what we are supposed to do here
} */
let likelyWinner = "";
function setLikelyWinner(inputGame) {
  if (inputGame.odds.team1 < inputGame.odds.x && inputGame.odds.team1 < inputGame.odds.team2) {
    console.log(inputGame.team1);
  } else if (inputGame.odds.team2 < inputGame.odds.x && inputGame.odds.team2 < inputGame.odds.team1) {
    console.log(inputGame.team2);
  } else {
    console.log("Draw");
  }
}

setLikelyWinner(game);

/* 🏁 Exercice 2
Tâches :
Faire une boucle sur le tableau game.scored et afficher dans la console chaque nom de butteur ainsi que le numéro du but : (Exemple : “But 1 : Lewanoski”).
Faire une boucle qui calcule la moyenne des probabilités et l’écrire dans la console.
Afficher les 2 probabilités dans la console, mais dans un joli format comme ceci :
Probabilité de victoire pour Bayern Munich : 1,33
Probabilité d’égalité : 3,25
Probabilité de victoire de Borussia Dortmund : 6,5
Bien récupérer les noms des équipes depuis l’objet ‘game’, ne pas les “hardcoder”.
Créer un objet appelé ‘scorers’ qui contient le nom des joueurs qui ont marqué en propriété et le nombre de buts qu’ils ont marqué en value. Exemple : */

/* {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
} */

/* 🏁 Exercice 3
Cette fois-ci, nous avons un tableau à 2 dimensions appelé ‘gameEvents’ (voir en dessous) avec le log de tous les évènements qui se sont passés pendant le match. La première case d’un sous-tableau correspond à la minute de l’évènement, la 2ème case correspond au type d’évènement.

Tâches :
Créer un tableau ‘events’ des différents évènements qui se sont déroulés (pas de doublon !).
Après que le jeux soit fini, on a décidé que le carton jaune de la minute 64 n’était pas juste, Le supprimer du log d’évènements.
Calculer et afficher ce texte dans la console : “Un évènement est apparu en moyenne toutes les 9 minutes”. (Un jeu de foot dure 90 minutes).
Faire une boucle sur ‘gameEvents’ et afficher pour chaque élément dans la console s’il s’est déroulé dans la première ou deuxième moitié du jeu :
[PREMIÈRE MOITIÉ] 17 . ⚽️ GOAL */

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];
