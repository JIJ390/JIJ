const userList = document.querySelectorAll('[name=rsp]');

const userImage = document.querySelector('[name=userScreen]');
const comImage = document.querySelector('[name=comScreen]');

const vsCheck = document.querySelectorAll('.vsCheck');

const result = document.querySelector('#result');
const record = document.querySelector('.record');

const start = document.querySelector('#startBtn');

var str ='';

var rspValue;

var winCount = 1;
var vsCount = 1;
var loseCount = 1;

var maxTryNumb = 0;
var count = 0;

const rspList = ['가위', '바위', '보'];
const vsList = ['WIN', 'DRAW', 'LOSE'];



start.addEventListener('click', function() {
  maxTryNumb = prompt('시도 횟수를 입력하세요');

  if(maxTryNumb === null || isNaN(Number(maxTryNumb))){
    alert("숫자 입력 후 확인을 눌러주세요");
    maxTryNumb = 0;
    return;
  }

  count = 0;
  winCount = 0;
  vsCount = 0;
  loseCount = 0;
  str = '';

  tryCheck();
});

userList[0].addEventListener('click', function() {
  rspValue = 0;
  if (tryCheck() === 'over') return;
  rspGame(rspValue);
  printResult();
  userImage.style.backgroundImage = `url('../images/0710_가위바위보/가위L.png')`;
  count++;
});

userList[1].addEventListener('click', function() {
  rspValue = 1;
  if (tryCheck() === 'over') return;
  rspGame(rspValue);
  printResult();
  userImage.style.backgroundImage = `url('../images/0710_가위바위보/바위L.png')`;
  count++;
});

userList[2].addEventListener('click', function() {
  rspValue = 2;
  if (tryCheck() === 'over') return;
  rspGame(rspValue);
  printResult();
  userImage.style.backgroundImage = `url('../images/0710_가위바위보/보L.png')`;
  count++;
});

//==========================================

function rspGame(x) {
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
    vsCount++;
  } else if (x === 0 && comRsp === 1) {
    index = 2;
    loseCount++;
  } else if (x === 0 && comRsp === 2) {
    index = 0;
    winCount++;
  } else if (x === 1 && comRsp === 2) {
    index = 2;
    loseCount++;
  } else if (x === 1 && comRsp === 0) {
    index = 0;
    winCount++;
  } else if (x === 2 && comRsp === 0) {
    index = 2;
    loseCount++;
  } else if (x === 2 && comRsp === 1) {
    index = 0;
    winCount++;
  }

  vsCheck[0].innerText = `${winCount}`;
  vsCheck[1].innerText = `${vsCount}`;
  vsCheck[2].innerText = `${loseCount}`;

  str += `<li><span class="${vsList[index].toLowerCase()}">${vsList[index]} </span><span>${rspList[x]} </span><span>VS </span><span>${rspList[comRsp]} </span></li>`;
}

function tryCheck() {
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

function printResult() {
  result.innerHTML = str;
  record.scrollTop = record.scrollHeight; 
}