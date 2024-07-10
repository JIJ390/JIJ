const numbList = document.querySelectorAll('.numb');
const play = document.querySelector('#play');

var checkList = [2,2,2,2,2,2,2,2,2,2,2,2];
var count = 0;


play.addEventListener('click', function() {

  if (count === numbList.length) {
    count = 0;
    for ( let i = 0; i < numbList.length; i++) {
      checkList[i] = 2;
      numbList[i].style.backgroundColor = 'white';
      numbList[i].style.color = 'black';
    }
    return;
  }

  for (let i = 0; i < 2; i++){
    const randomNumber = Math.floor(Math.random() * numbList.length);

    if (checkList[randomNumber] === 1) {
      i--;
      continue;
    }
    
    numbList[randomNumber].style.backgroundColor = 'black';
    numbList[randomNumber].style.color = 'white';

    checkList[randomNumber] = 1;
    count++;
  }
});


numbList[0].addEventListener('click', function() {
  reverse(0);
});

numbList[1].addEventListener('click', function() {
  reverse(1);
});

numbList[2].addEventListener('click', function() {
  reverse(2);
});

numbList[3].addEventListener('click', function() {
  reverse(3);
});

numbList[4].addEventListener('click', function() {
  reverse(4);
});

numbList[5].addEventListener('click', function() {
  reverse(5);
});

numbList[6].addEventListener('click', function() {
  reverse(6);
});

numbList[7].addEventListener('click', function() {
  reverse(7);
});

numbList[8].addEventListener('click', function() {
  reverse(8);
});

numbList[9].addEventListener('click', function() {
  reverse(9);
});

numbList[10].addEventListener('click', function() {
  reverse(10);
});

numbList[11].addEventListener('click', function() {
  reverse(11);
});


function reverse(x) {
  if (checkList[x] === 2) return;
  numbList[x].style.backgroundColor = 'white';
  numbList[x].style.color = 'black';
  checkList[x] = 2;
  count--;
}


