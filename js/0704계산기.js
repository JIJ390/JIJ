
var value1 = '';
var value2 = '';

function val1(val) {
  const result = document.getElementById("result");

  switch (val) {
    case '1' : value1 = value1 + '1'; break;
    case '2' : value1 = value1 + '2'; break;
    case '3' : value1 = value1 + '3'; break;
    case '4' : value1 = value1 + '4'; break;
    case '5' : value1 = value1 + '5'; break;
    case '6' : value1 = value1 + '6'; break;
    case '7' : value1 = value1 + '7'; break;
    case '8' : value1 = value1 + '8'; break;
    case '9' : value1 = value1 + '9'; break;
    case '0' : value1 = value1 + '0'; break;
    case '.' : value1 = value1 + '.'; break;
    default : value1 = 0;
  }

  result.innerText =  value1;
}

function val2(val) {
  const result2 = document.getElementById("result2");

  switch (val) {
    case '1' : value2 = value2 + '1'; break;
    case '2' : value2 = value2 + '2'; break;
    case '3' : value2 = value2 + '3'; break;
    case '4' : value2 = value2 + '4'; break;
    case '5' : value2 = value2 + '5'; break;
    case '6' : value2 = value2 + '6'; break;
    case '7' : value2 = value2 + '7'; break;
    case '8' : value2 = value2 + '8'; break;
    case '9' : value2 = value2 + '9'; break;
    case '0' : value2 = value2 + '0'; break;
    case '.' : value2 = value2 + '.'; break;
    default : value2 = 0; 
  }

  result2.innerText =  value2;
}

function calc(op) {
  let numb1 = Number(value1);
  let numb2 = Number(value2);
  let result; // 결과 저장
  

  switch(op) {
    case '+' : result = numb1 + numb2; break;
    case '-' : result = numb1 - numb2; break;
    case '*' : result = numb1 * numb2; break;
    case '/' : result = numb1 / numb2; break;
    case '%' : result = numb1 % numb2; break;
    default : result = "잘못된 연산자.";
  }
  document.getElementById("calcResult").innerText = result;
}

