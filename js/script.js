// console.log("Hello");

// variable de texte / chaine de characteres (string)
//var titre = "Mon super jeu";
// console.log(titre);

// variable de nombre
//var score = 34;
// console.log(score);

// addition
//var score2 = score + 3;
//console.log(score2);

// concatenation
//var titre2 = titre + " trop top !";
//console.log(titre2);

// piege
//var a = 2;
//var b = "3";
//var c = a + b;
//console.log(c);


//var cesoir = malistedecourse[4];
//console.log(cesoir);

// la variable document exist deja par defaut
//console.log(document);

// html dom
 var divlist = document.querySelectorAll('div');
 console.log(divlist);
var monperso = document.querySelector('.canard');
console.log(monperso);

 //monperso.style.backgroundColor = "green";
//monperso.style.top = "130px";
//monperso.style.left = "45px";
var canard= document.querySelector('.canard');
var vitesse = 0;
var pos_gauche_perso = 153;
var pos_top_perso = 84;
var touches = {
  "gauche": false,
  "droite": false,
  "haut": false,
  "bas": false
};
var animate = function(){
  // avance vers la droite
  // si avance vers la droite et bord droit alors avance vers la gauche
  // si avance vers gauche et bord gauche alors avance vers la droite
  //if(vitesse > 0 && pos_gauche_perso > 400){
    //vitesse = -3;
  //}else if(vitesse < 0 && pos_gauche_perso < 0){
    //vitesse = 3;
  //}

  //if(vitesse > 0){
    //monperso.classList.add("gd");
    //monperso.classList.remove("dg");
  //}else{
  //  monperso.classList.add("dg");
    //monperso.classList.remove("gd");
  //}

  canard.children[0].src='img/Coeur'+vitesse+'.png';


  if(touches["haut"])
    pos_top_perso -= vitesse;

  if(touches["bas"])
    pos_top_perso += vitesse;

  if(touches["gauche"])
    pos_gauche_perso -= vitesse;

  if(touches["droite"])
    pos_gauche_perso += vitesse;

  monperso.style.left = pos_gauche_perso+'px';
  monperso.style.top = pos_top_perso+'px';

  window.requestAnimationFrame(animate);

  //
  // if (true) {
  //   // tu fais qlq chose
  // }else if (true) {
  //   // tu fais qlq chose
  // }else if (true) {
  //   // tu fais qlq chose
  // }else {
  //   // tu fais qlq chose
  // }


}
animate();


// Les functions
var addition = function(a,b){
  return a+b;
}

var f = 3;
var k = 56;
var c = addition(f,k);
console.log(c);

var d = addition(45,78);
console.log(d);

var e = addition(12,7);
console.log(e);

// Evenements (events)
document.addEventListener('click', onClickDoc);

function onClickDoc(event){
  console.log("j'ai cliqué");
}

document.addEventListener('keydown', onKeyDownDoc);
document.addEventListener('keyup', onKeyUpDoc)

function onKeyUpDoc(event){
  switch (event.key) {
    case "z":
      touches["haut"] = false;
      break;
    case "s":
      touches["bas"] = false;
      break;
    case "q":
      touches["gauche"] = false;
      break;
    case "d":
      touches["droite"] = false;
      break;
  }
}

function onKeyDownDoc(event){
      switch (event.key) {
      case "z":
        touches["haut"] = true;
        break;
      case "s":
        touches["bas"] = true;
        break;
      case "q":
        touches["gauche"] = true;
        break;
      case "d":
        touches["droite"] = true;
        break;
    }
}



canard.addEventListener('click', onClickCanard);

function onClickCanard(event){
  console.log('on click canard');

    vitesse = (vitesse+1)%4;
    //canard.src='file:///C:/Users/nathaelle/Desktop/ESADHaR/INFORMATIQUE/Coeur'+vitesse+'.png';
console.log(vitesse);
  }




// ANIM FLOCONS
// JavaScript Document
function tombe () {
  for (var i = 0; i < nbFlocons; i++) {
    if (flocons[i]["top"] > hauteurF) {
      flocons[i]["top"] = 0;
      flocons[i]["left"] = Math.floor(Math.random()*largeurF);
    } else
      flocons[i]["top"] += (3 * flocons[i]["scale"]);
    document.getElementById('f'+i).style.top = flocons[i]["top"]+'px';
    document.getElementById('f'+i).style.left = flocons[i]["left"]+'px';
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function tombeSur (id) {
  //le nombre d'objets
  nbFlocons = 35;
  //la dimension de l'objet
  objectWidth = 40;
  objectHeight = 40;
  //dimension de la zone
  largeurF = parseInt(document.getElementById(id).style.width.substr(0, document.getElementById(id).style.width.length-2));
  hauteurF = parseInt(document.getElementById(id).style.height.substr(0, document.getElementById(id).style.height.length-2));
  largeurF -= objectWidth;
  hauteurF -= objectHeight;
  flocons = new Array();
  for (var i=0; i < nbFlocons; i++) {
    flocons[i] = new Array();
    flocons[i]["left"] = Math.floor(Math.random()*largeurF);
    flocons[i]["top"] = Math.floor(Math.random()*hauteurF);
    flocons[i]["scale"] = getRandomInt(3);

    document.write ('<span id="f'+i+'" style="position: absolute; left: '+flocons[i]["left"]+'px; top: '+flocons[i]["top"]+'px; color: white">');
    //l'objet qui tombe

    document.write ('<img src="img/flocon.gif" width="'+(20*flocons[i]["scale"])+'" height="'+(20*flocons[i]["scale"])+'">');
    document.write ('</span>');
  }

  intervalF = window.setInterval ("tombe()", 50);
}
