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


for(let i = 0; i < 12; i ++) {  //함수가 12번 돌아가는게 아니라 12 번 함수를 선언 한다고 이해
  numbList[i].addEventListener('click', function() {
    reverse(i);
  });
}

function reverse(x) {
  if (checkList[x] === 2) return;
  numbList[x].style.backgroundColor = 'white';
  numbList[x].style.color = 'black';
  checkList[x] = 2;
  count--;
}


