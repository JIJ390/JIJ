const sizeList = document.querySelectorAll('.size');
const imageList = document.querySelectorAll('.boxImage');

const apply = document.querySelector('#applying');
const box = document.querySelector('.box');

apply.addEventListener('click', function() {
  
  const fontCheck = document.querySelector('[name = fontWeight]:checked');
  const horiznalCheck = document.querySelector('[name = horizonalAlign]:checked');
  const verticalCheck = document.querySelector('[name = verticalAlign]:checked');
  
  let fw;
  let ha;
  let va;
  

  if (fontCheck === null) fw = 'normal';
  else fw = fontCheck.value;

  if (horiznalCheck === null) ha = 'center';
  else ha = horiznalCheck.value;

  if (verticalCheck === null) va = 'center';
  else va = verticalCheck.value;
  

  box.style.width = `${sizeList[0].value}px`;
  box.style.height = `${sizeList[1].value}px`;
  box.style.fontSize = `${sizeList[2].value}px`;

  box.style.color = `${imageList[0].value}`;
  box.style.backgroundColor = `${imageList[1].value}`;
  
  box.style.fontWeight = fw;
  box.style.justifyContent = ha;
  box.style.alignItems = va;

  
  box.innerText = `${imageList[2].value}`;

});