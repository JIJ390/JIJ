const containerB = document.querySelector('.containerB');
const box = document.querySelectorAll('.box');

// 기존 위치에 있는 div를 지우고 가장 왼쪽에 생성

const leftMove = () => {

  for (let i = 0; i < box.length; i++) {

    if (box[i].querySelector('.innerBox') !== null) {
      const div = reInnerBox(i);

        // 만들어진 박스를 새로운 장소에 할당
      if (box[i].className.includes('positionY0')) {
        box[0].prepend(div);
      } else if (box[i].className.includes('positionY1')) {
        box[4].prepend(div);
      } else if (box[i].className.includes('positionY2')) {
        box[8].prepend(div);
      } else if (box[i].className.includes('positionY3')) {
        box[12].prepend(div);
      }
    }
      
    box[i].innerHTML = '';
  }
};



document.addEventListener('keydown', e => {

  switch (e.key) {
    case 'w' : break;
    case 's' : break;
    case 'a' : leftMove(); break;
    case 'd' : break;
    default : return;
  }
});

/** 이너 박스를 지우고 새로 만드는 부분 */
const reInnerBox = (x) => {

  const innerValue = box[x].querySelector('.innerBox');
  const boxValue = Number(innerValue.innerText); 
  const div = document.createElement('div');
      
  div.innerHTML = boxValue;
  div.className = 'innerBox';

  return div;
  
  
}