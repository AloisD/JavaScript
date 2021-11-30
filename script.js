"use strict";

/* Crée un objet billyTheCat
il doit avoir une propriété name,
une propriété color,
une propriété favouriteFoods (un tableau avec plusieurs entrées),
une propriété isHungry définie à true
et une méthode meow qui imprime “Meooow” dans la console
Ensuite, crée une variable selectedProperty et, à l’aide de prompt, demande à l’utilisateur de choisir la propriété de l’objet qu’il veut afficher.
Enfin, utilise console.log pour afficher la bonne propriété (en utilisant des crochets []). */

const billyTheCat = {
  name: "billy",
  color: "",
  favouriteFoods: [],
  isHungry: true,
  meow: function() {
    console.log("Meooow");
  }
}

const selectedProperty = prompt('Tape la propriété que tu veux afficher') ;
console.log(billyTheCat[selectedProperty]) ;