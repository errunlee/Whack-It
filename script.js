
let item = document.querySelectorAll('.item')
let len = item.length;
let points = 0;
let i_d;
let speed;

function getid() {
  for (let i = 0; i < len; i++) {
    i_d = item[i].getAttribute('id')
  }
}
function rem() {
  for (let i = 0; i < len; i++) {
    item[i].classList.remove('mole')
    item[i].classList.remove('yellow')
    item[i].classList.remove('red')
  }
}

function redish() {

  for (let i = 0; i < len; i++) {
    let r = item[i].classList.contains('mole')
    if (r) {
      item[i].addEventListener('click', () => {
        item[i].classList.remove('mole')
        item[i].classList.add('yellow')
        item[i].classList.add('none')
      })
    }
    else {
      item[i].addEventListener('click', () => {
        item[i].classList.remove('yellow')
        item[i].classList.add('red')
        item[i].classList.add('del')
      })
    }
  }
}
function rotateAround() {

  let random;
  let m = setInterval(() => {
    rem();
    random = Math.floor(Math.random() * len)
    item[random].classList.add('mole')
    i_d = item[random].getAttribute('id')
    let p1 = new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        item[i].addEventListener('click', result)
      }
    })
    p1.then(() => {
      item[random].removeEventListener('click', result)
    })
    redish();
  },650)
}
rotateAround();

function result(e) {
  let clickid = this.id;
  if (clickid == i_d) {
    points++;
    score.innerHTML ="Score : "+ points;
  }
  else {
    points--;
    score.innerHTML ="Score : "+ points;
  }
}


