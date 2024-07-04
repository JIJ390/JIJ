function star() {
  let value='';
  for(let i = 0 ; i<10 ; i++){
    value += '*';
    console.log(value);
  }
}

function piramid() {
  let value='        *';
  for(let i = 0 ; i<5 ; i++){
    console.log(value);
    value += '****';
    value = value.slice(2,value.length);
  }
}

function rePiramid() {
  let value='*****************';
  for(let i = 0 ; i<4 ; i++){
    console.log(value);
    value = value.slice(0, -4);
    value = '  ' + value;
  }

}

function sandGlass() {

/*let value1='*****************'; // 별 17개
  let value2='        *';         // 공백 8개
  for(let i = 0 ; i<4 ; i++){
    console.log(value1);          
    value1 = value1.slice(0, -4); // 뒤쪽 별 4개 자름
    value1 = '  ' + value1;     // 앞에 공백 2개
  }
  for(let i = 0 ; i<5 ; i++){
    console.log(value2);
    value2 += '****';       // 뒤에 별 4개 붙임
    value2 = value2.slice(2);   // 앞에 공백 2개 자름
  } */

  rePiramid();
  piramid();
}
 