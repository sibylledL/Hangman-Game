var jouer = document.querySelector("#jouer");
var player = document.querySelector('#player').value;
var textTrou = document.querySelector('#textTrou');
var letterTotest = document.querySelector('#guessLetter');
var dessin = document.querySelector('#illustration');

var i = 0;
var repertoire = ["niktout","vouivre","persiflore","commodite","hilarant","rubicond","glamour","baby","lol","cardi-b"];
var mot =  repertoire[Math.floor(Math.random() * repertoire.length)];
var answer = [];
var letterUnmatched = 0;
var letterMatched =0;
var numDessin = 0;
var mauvaiseReponse = 0;
var tour = 0;
//lance le mot
jouer.addEventListener("click",lancerJeux)

function lancerJeux(){
jouer.innerHTML = "Rejouer";
mot =  repertoire[Math.floor(Math.random() * repertoire.length)];
answer=[];
mauvaiseReponse = 0;
letterUnmatched=0
document.querySelector('#usedLetter').innerHTML=null;
document.querySelector('#player').value= null;

dessin.style.backgroundImage="url('pendu-"+mauvaiseReponse+".jpg')";

for(var i = 0; i<mot.length; i++){
  if(mot[i].match(/[a-z]/)){
  answer.push('_');
}else{
  answer.push(mot[i])
}
}
  textTrou.innerHTML = answer.join(' ');
return textTrou
}

//press enter pour testerLettre()
document.querySelector('#player').addEventListener('keyup',function(e){
  if(e.keyCode===13){
    testerLettre();
  }
});


//Test lettre
letterTotest.addEventListener('click',testerLettre)
function testerLettre(){
  letterUnmatched = 0;
  letterMatched = 0;

  document.querySelector('#player').focus();
  document.querySelector('#usedLetter').innerHTML += document.querySelector('#player').value+"</br>";
  for(var i=0;i<mot.length;i++){
    if(document.querySelector('#player').value===mot[i]){
      answer[i]=document.querySelector('#player').value;
      letterMatched ++
    }else{
      letterUnmatched ++
    }
  }

  if(letterUnmatched==mot.length){
    mauvaiseReponse ++
    dessin.style.backgroundImage="url('pendu-"+mauvaiseReponse+".jpg')";
  }

  textTrou.innerHTML = answer.join(' ');
  document.querySelector('#player').value=null;
  ifWinner()

}

function ifWinner(){
  if(answer.indexOf('_')== -1){
    dessin.style.backgroundImage="url('pixel-heart.png')";
}
}
