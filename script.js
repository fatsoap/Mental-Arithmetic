let input_field;
let question_field;
let timer;
let correct_amount;
let total_amount;
let pause;

function init() {
  question_field.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerText = Math.floor(Math.random() * 200 - 100);
    question_field.appendChild(li);
  }
  input_field.value = '';
}

function submit() {
  let ans = Number(input_field.value);
  let total = 0;
  let questions = document.querySelectorAll('li');
  for (let i = 0; i < questions.length; i++) {
    total += Number(questions[i].innerText);
  }
  let correct_flag = document.getElementById('correct_flag');
  if (total === ans) {
    correct_flag.style.backgroundColor = '#70ca70';
    correct_amount.innerText = Number(correct_amount.innerText) + 1;
  } else {
    correct_flag.style.backgroundColor = '#fc7e7e';
  }
  total_amount.innerText = Number(total_amount.innerText) + 1;
  correct_flag.innerText = total;
  init();
}

function togglePause() {
  pause = !pause;
  document.getElementById('pause_cover').style.height = pause ? '100%' : '0%';
}

function restart() {
  init();
  timer.innerText = '0';
  total_amount.innerText = '0';
  correct_amount.innerText = '0';
  correct_flag.innerText = '';
  correct_flag.style.backgroundColor = '#5f5f5f';
}

window.onload = function () {
  input_field = document.getElementById('input_field');
  question_field = document.getElementById('question_field');
  timer = document.getElementById('timer');
  correct_amount = document.getElementById('correct_amount');
  total_amount = document.getElementById('total_amount');
  pause = true;
  input_field.addEventListener('keyup', function (e) {
    e.preventDefault();
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      // enter
      submit();
    }
  });
  document.querySelector('body').addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.keyCode === 32) {
      // space
      togglePause();
    } else if (e.keyCode === 82) {
      //r
      restart();
    }
  });
  init();
  input_field.focus();
  togglePause();
  setInterval(() => {
    if (!pause) {
      timer.innerText = Number(timer.innerText) + 1;
    }
  }, 1000);
};
