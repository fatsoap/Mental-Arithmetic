let input_field = document.getElementById('input_field');
let question_field = document.getElementById('question_field');
let timer = 0;
let correct_amount = 0;
let total_amount = 0;
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
    timer = 0;
    correct_amount = 0;
    total_amount = 0;
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
  document.getElementById('score_board').innerText =
    '答對題數: ' + correct_amount + ' / ' + total_amount;
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
    correct_amount += 1;
  } else {
    correct_flag.style.backgroundColor = '#fc7e7e';
  }
  total_amount += 1;
  correct_flag.innerText = total;
  input_field.value = '';
  init();
}

init();
input_field.focus();
pause = false;
setInterval(() => {
  if (!pause) {
    timer += 1;
    document.getElementById('timer').innerText = timer;
  }
}, 1000);
