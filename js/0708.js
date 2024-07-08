function check1() {
  const divs = document.querySelectorAll('[div-name = bigDiv] > div');
  const div1 = document.querySelectorAll('[div-name = div1] > div');
  const div2 = document.querySelectorAll('[div-name = div2] > div');
  const div3 = document.querySelectorAll('[div-name = div3] > div');
  const arr = [div1, div2, div3];

  let count = 0;

  for (let i = 0; i < arr.length; i++) {

    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "space-around";
    divs[i].style.alignItems = "center";

    for (let j = 0; j < arr[i].length; j++) {
      count++;
      arr[i][j].innerHTML = `${count} `; 
    }
  }
}