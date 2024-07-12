const userList = document.querySelectorAll('[name=rsp]');
// 사용자 가위바위보 선택 배열
const userImage = document.querySelector('[name=userScreen]');
const comImage = document.querySelector('[name=comScreen]');

const vsCheck = document.querySelectorAll('.vsCheck');
// 승패 확인 배열
const result = document.querySelector('#result');
const record = document.querySelector('.record');

const start = document.querySelector('#startBtn');

var str ='';

var rspValue; // 가위 : 0, 바위 : 1. 보 : 2

var winCount = 1;
var drawCount = 1;
var loseCount = 1;

var maxTryNumb = 0;
var count = 0;

const rspList = ['가위', '바위', '보'];
const vsList = ['WIN', 'DRAW', 'LOSE'];


start.addEventListener('click', () => {
  maxTryNumb = prompt('시도 횟수를 입력하세요');

  if(maxTryNumb === null || isNaN(Number(maxTryNumb))){
    alert("숫자 입력 후 확인을 눌러주세요");
    maxTryNumb = 0;
    return;
  }

  count = 0;
  winCount = 0;
  drawCount = 0;
  loseCount = 0;
  str = '';

  tryCheck();
});

for (let i = 0; i < userList.length; i++) {
  userList[i].addEventListener('click', () => {
    rspValue = i;
    if (tryCheck() === 'over') return;
    rspGame(rspValue);
    printResult();
    userImage.style.backgroundImage = `url('../images/0710_가위바위보/${rspList[i]}L.png')`;
    count++;
  });
}


const rspGame = x => {
  const comRsp = Math.floor(Math.random()*3);
  let index;

  switch (comRsp) {
    case 0 : comImage.style.backgroundImage = `url('../images/0710_가위바위보/가위R.png')`; break;
    case 1 : comImage.style.backgroundImage = `url('../images/0710_가위바위보/바위R.png')`; break;
    case 2 : comImage.style.backgroundImage = `url('../images/0710_가위바위보/보R.png')`; break;
    default : return;
  }

  if (x === comRsp) {
    index = 1;
    drawCount++;
  } else if ((x === 0 && comRsp === 1) || (x === 1 && comRsp === 2) || (x === 2 && comRsp === 0)) {
    index = 2;
    loseCount++;
  } else if ((x === 0 && comRsp === 2) || (x === 1 && comRsp === 0) || (x === 2 && comRsp === 1)) {
    index = 0;
    winCount++;
  } 
  
  vsCheck[0].innerText = `${winCount}`;
  vsCheck[1].innerText = `${drawCount}`;
  vsCheck[2].innerText = `${loseCount}`;

  str += `<li><span class="${vsList[index].toLowerCase()}">${vsList[index]}</span><span>${rspList[x]}</span><span>VS</span><span>${rspList[comRsp]}</span></li>`;
}

const tryCheck = () => {
  if (maxTryNumb === 0) {
    alert('GAME START 를 눌러주세요');
    return 'over';
  }
  if(count === Number(maxTryNumb)) {
    alert('게임이 종료되었습니다.');
    count = 0;
    maxTryNumb = 0;
    str = '';
    return 'over';
  }
}

const printResult = () => {
  result.innerHTML = str;
  record.scrollTop = record.scrollHeight; 
}