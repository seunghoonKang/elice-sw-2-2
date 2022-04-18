function night() {
  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('body').style.color = 'white';
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = 'white';
  }
  // $('body').css('background-color', 'black');
  // $('body').css('color', 'white');
  // $('a').css('color', 'white').css('text-decoration', 'underline');
}

function day() {
  // 아니라면 아래 코드가 실행된다. 
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  // 이 버튼의 value값을 night로 변경한다. 
  let as = document.querySelectorAll('a');
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = 'black';
  }
}

//외부에서 사용할 함수만 export를 붙인다.

export function dayNight(mode) {
  if (mode === 'night') {
    night();
  } else {
    day();
  }
}