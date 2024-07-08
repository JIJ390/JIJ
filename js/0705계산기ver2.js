var i = 0;
var value = [];
var op = [];
value[i] = '';
op[i] = '';

const result = document.getElementById("result");
result.innerText = '0';

function calc(val) {

  switch (val) {
    case '1' : value[i] = value[i] + '1'; break;
    case '2' : value[i] = value[i] + '2'; break;
    case '3' : value[i] = value[i] + '3'; break;
    case '4' : value[i] = value[i] + '4'; break;
    case '5' : value[i] = value[i] + '5'; break;
    case '6' : value[i] = value[i] + '6'; break;
    case '7' : value[i] = value[i] + '7'; break;
    case '8' : value[i] = value[i] + '8'; break;
    case '9' : value[i] = value[i] + '9'; break;
    case '0' : value[i] = value[i] + '0'; break;
    case '.' : value[i] = value[i] + '.'; break;
    case '+' : vPlus(); op[i] = '+'; vPlus(); result.innerText = '+'; return;
    case '-' : vPlus(); op[i] = '-'; vPlus(); result.innerText = '-'; return;
    case '*' : vPlus(); op[i] = '*'; vPlus(); result.innerText = '*'; return;
    case '/' : vPlus(); op[i] = '/'; vPlus(); result.innerText = '/'; return;
    case '=' : math(); break;
    default : rst(); result.innerText = 0; return;
      
  }
  result.innerText = value[i];
}


function math() {
  i++;
  for (let num = 0; num < i; num++) {
      if (op[num] === '+') {
        value[i] = Number(value[num - 1]) + Number(value [num +1]);
      }
      else if (op[num] === '-') {
        value[i] = Number(value[num - 1]) - Number(value [num +1]);
      }
      else if (op[num] === '*') {
        value[i] = Number(value[num - 1]) * Number(value [num +1]);
      }
      else if (op[num] === '/') {
        value[i] = Number(value[num - 1]) / Number(value [num +1]);
      }
  }   
}

function rst() {
  for (let num = 0; num <= i; num++) {
    value[num] = '';
    op[num] = '';
  }
  i = 0; 
}

function vPlus() {
  value[i+1] =''; 
  i++;
}