/* GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game */

let scores , roundScores, activePlayer;

scores= [0,0];
roundScores = 0;
activePlayer = 0;



//hide the dice for start game and set the score 0
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;


document.querySelector('.btn-roll').addEventListener('click', function(){
  //1. random number
  let dice = Math.floor(Math.random()*6)+1;

  //2. display result
  let diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'images/dice-'+ dice +'.png';

  //3.update the round score if rolled was not a 1
     if(dice!== 1){
       //add score
       roundScores = roundScores + dice;
       document.querySelector('#current-'+activePlayer).textContent = roundScores;
     }
     else{
       //next player
       activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
       roundScores = 0;

       document.getElementById('current-0').textContent = 0;
       document.getElementById('current-1').textContent = 0;

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       //document.querySelector('.player-0-panel').classList.remove('active');

       document.querySelector('.dice').style.display = 'none';
     }
})

/*
dice = Math.floor(Math.random()*6)+1;
console.log(dice);
//set the score on browser
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//read the score / get the score
var x = document.querySelector('#score-0').textContent;
console.log(x);*/