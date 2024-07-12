const number = document.querySelectorAll('.number');
const output = document.querySelector('#output');
const resetBtn = document.querySelector('#resetBtn');

for (let i = 0; i < number.length; i++) {
  
  number[i].addEventListener('click', () => {

    if (output.innerHTML.length >= 10) {
      alert('10 글자 까지만 입력 가능')
      return;
    }

    const str = number[i].innerText;
    output.innerHTML += str;
    
  });
}

resetBtn.addEventListener('click', () => {
  output.innerHTML = '';
})