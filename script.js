let input_field = document.getElementById('input_field');
let question_field = document.getElementById('question_field');
let timer = document.getElementById('timer');
let correct_amount = document.getElementById('correct_amount');
let total_amount = document.getElementById('total_amount');
let pause = true;

input_field.addEventListener('keyup', function (e) {
  e.preventDefault();
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    // enter
    submit();
  } else if (e.keyCode === 32) {
    //space
    pause = !pause;
    question_field.style.backgroundColor = pause ? '#000000' : 'transparent ';
    input_field.value = '';
  } else if (e.keyCode == 82) {
    // restart
    timer.innerText = '0';
    correct_amount.innerText = '0';
    total_amount.innerText = '0';
    input_field.value = '';
    init();
  }
});

function init() {
  question_field.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.innerText = Math.floor(Math.random() * 200 - 100);
    question_field.appendChild(li);
  }
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
    correct_flag.style.backgroundColor = '#81ff81';
    correct_amount.innerText = Number(correct_amount.innerText) + 1;
  } else {
    correct_flag.style.backgroundColor = '#fc7e7e';
  }
  total_amount.innerText = Number(total_amount.innerText) + 1;
  correct_flag.innerText = total;
  input_field.value = '';
  init();
}

init();
input_field.focus();
pause = false;
setInterval(() => {
  if (!pause) {
    timer.innerText = Number(timer.innerText) + 1;
  }
}, 1000);
