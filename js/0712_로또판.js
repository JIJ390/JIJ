const lottoBtn = document.querySelector('#lottoBtn');
let count = 0;

lottoBtn.addEventListener('click', () => {

  if(lottoBtn.nextElementSibling.className.includes('containerA')) {
    count = 0;
    document.querySelector('.containerA').remove();
  }

  const containerA = document.createElement('div');
  containerA.className = 'containerA';

  for (let i = 0; i < 45; i++) {
    const lottoNumber = document.createElement('div');
    lottoNumber.className = 'lottoNumber';
    lottoNumber.innerText = i + 1;
    containerA.append(lottoNumber);
  }

  lottoBtn.after(containerA);

  const lottoNumber = document.querySelectorAll('.lottoNumber');

  for(let i = 0; i < 45; i++) {
    lottoNumber[i].addEventListener('click', () => {

      if (lottoNumber[i].style.backgroundColor === 'pink') {
        lottoNumber[i].style.backgroundColor = 'white';
        count--;
        return;
      }

      if (count >= 6) {
        alert('최대 6 개까지 선택할 수 있습니다.');
        return;
      }
      
      lottoNumber[i].style.backgroundColor = 'pink';

      count++;

    })
  }
});
