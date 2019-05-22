var coeur = document.querySelector('.coeur');

var screenW = window.innerWidth;
var screenH = window.innerHeight;

var pageW = document.body.scrollWidth;
var pageH = document.body.scrollHeight;

var gapLeft = 0;
var gapTop = 0;

window.scrollTo(0,0);

console.log(pageW);
console.log(pageH);

var vitesse = 0;
var pos_gauche_perso = 153;
var pos_top_perso = 84;
var touches = {
  "gauche": false,
  "droite": false,
  "haut": false,
  "bas": false
};

function verifPosEtBougeCoeur() {
  if(vitesse == 0) return;

  if (touches["haut"])
  {
    futurePos = pos_top_perso - vitesse;
    if(futurePos <=0) return;

    relPos = futurePos - gapTop;

    if(relPos <= 0.25*screenH)
    {
      gapTop -= vitesse*2;
      if(gapTop < 0) gapTop = 0;

      window.scrollBy(0,-vitesse*2);
    }

    console.log(relPos);

    pos_top_perso -= vitesse;
  }

  if (touches["bas"])
  {
    futurePos = pos_top_perso + vitesse;
    if(futurePos >=pageH) return;

    relPos = futurePos - gapTop;

    if(relPos >= 0.75*screenH)
    {
      gapTop += vitesse*2;
      if(gapLeft > pageH - screenH) gapLeft = pageH - screenH;

      window.scrollBy(0,vitesse*2);
    }

    console.log(relPos);

    pos_top_perso += vitesse;
  }

  if (touches["gauche"])
  {
    futurePos = pos_gauche_perso - vitesse;
    if(futurePos <=0) return;

    relPos = futurePos - gapLeft;

    if(relPos <= 0.25*screenW)
    {
      gapLeft -= vitesse*2;
      if(gapLeft < 0) gapLeft = 0;

      window.scrollBy(-vitesse*2,0);
    }

    pos_gauche_perso -= vitesse;

    console.log(relPos);
  }

  if (touches["droite"])
  {
    futurePos = pos_gauche_perso + vitesse;
    if(futurePos >=pageW) return;

    relPos = futurePos - gapLeft;

    if(relPos >= 0.75*screenW)
    {

      gapLeft += vitesse*2;
      if(gapLeft > pageW - screenW)
        gapLeft = pageW - screenW;
      window.scrollBy(vitesse*2,0);
    }

    pos_gauche_perso += vitesse;
    console.log(relPos);
  }
}

tombeSur();
var animate = function () {
  coeur.children[0].src = 'img/Coeur' + vitesse + '.png';

  verifPosEtBougeCoeur();

  coeur.style.left = pos_gauche_perso + 'px';
  coeur.style.top = pos_top_perso + 'px';

  tombe();
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

// Evenements (events)
document.addEventListener('click', onClickDoc);

function onClickDoc(event) {
  console.log("j'ai cliqué");
}

document.addEventListener('keydown', onKeyDownDoc);
document.addEventListener('keyup', onKeyUpDoc)

function onKeyUpDoc(event) {
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

function onKeyDownDoc(event) {
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

coeur.addEventListener('click', onClickcoeur);

function onClickcoeur(event) {
  console.log('on click coeur');

  vitesse = (vitesse + 1) % 4;
  //coeur.src='file:///C:/Users/nathaelle/Desktop/ESADHaR/INFORMATIQUE/Coeur'+vitesse+'.png';
  console.log(vitesse);
}

// ANIM FLOCONS
// JavaScript Document
function tombe() {
  for (var i = 0; i < nbFlocons; i++) {
    if (flocons[i]["top"] > hauteurF) {
      flocons[i]["top"] = 0;
      flocons[i]["left"] = Math.floor(Math.random() * largeurF);
    } else
      flocons[i]["top"] += (3 * flocons[i]["scale"]);
    document.getElementById('f' + i).style.top = flocons[i]["top"] + 'px';
    document.getElementById('f' + i).style.left = flocons[i]["left"] + 'px';
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function tombeSur() {
  //le nombre d'objets
  nbFlocons = 10;
  //la dimension de l'objet
  objectWidth = 40;
  objectHeight = 40;
  //dimension de la zone
  largeurF = screenW;
  hauteurF = screenH;
  largeurF -= objectWidth;
  hauteurF -= objectHeight;
  flocons = new Array();
  for (var i = 0; i < nbFlocons; i++) {
    flocons[i] = new Array();
    flocons[i]["left"] = Math.floor(Math.random() * largeurF);
    flocons[i]["top"] = Math.floor(Math.random() * hauteurF);
    flocons[i]["scale"] = getRandomInt(3);

    document.write('<span id="f' + i + '" style="position: fixed; left: ' + flocons[i]["left"] + 'px; top: ' + flocons[i]["top"] + 'px; color: white">');
    //l'objet qui tombe

    document.write('<img src="img/flocon.gif" width="' + (20 * flocons[i]["scale"]) + '" height="' + (20 * flocons[i]["scale"]) + '">');
    document.write('</span>');
  }

  //intervalF = window.setInterval("tombe()", 50);
}
