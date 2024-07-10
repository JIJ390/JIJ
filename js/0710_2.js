const bigbox = document.querySelector('.bigBox');
const keyList = document.querySelectorAll('.keyArrow');

document.addEventListener('keydown', function(e){

  let index;

  switch (e.key.toLowerCase()) {
    case 'w' :  index = 0;
    
                if (bigbox.style.alignItems === 'flex-end') {
                  bigbox.style.alignItems = 'center'; break;
                } bigbox.style.alignItems = 'flex-start'; break;
    
    case 's' :  index = 2;
    
                if (bigbox.style.alignItems === 'flex-start') {
                  bigbox.style.alignItems = 'center'; break;
                } bigbox.style.alignItems = 'flex-end'; break;
    
    case 'd' :  index = 3;
                
                if (bigbox.style.justifyContent ==='left') {
                  bigbox.style.justifyContent = 'center'; break;
                } bigbox.style.justifyContent = 'right'; break;
    
    case 'a' :  index = 1;
    
                if (bigbox.style.justifyContent ==='right') {
                  bigbox.style.justifyContent = 'center'; break;
                } bigbox.style.justifyContent = 'left'; break;
    default  : return;
  }

  keyList[index].style.height = '40px';
  keyList[index].style.width = '40px';
});


document.addEventListener('keyup', function(e){
  let index;  
  switch (e.key.toLowerCase()) {
    case 'w' : index = 0; break;
    case 'a' : index = 1; break;
    case 's' : index = 2; break;
    case 'd' : index = 3; break;
    default  : return;
  }
  keyList[index].style.height = '45px';
  keyList[index].style.width = '45px';

});

