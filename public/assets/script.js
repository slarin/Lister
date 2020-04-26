//countdown to launch date, shows on dashboard
window.onload = function timer() {
  var launchDate = new Date("Jun 4, 2020");
  let today = new Date();
  let difference = Date.parse(launchDate) - Date.parse(today);
  
  let lm = launchDate.getMonth();
  let m = today.getMonth(); 

  let nd = Math.floor(difference /(1000*60*60*24));
  let nh = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
  let nm = Math.floor((difference % (1000*60*60))/(1000*60));

  if(nm == 1) {
    document.getElementById('dayer').innerHTML = 'day';
  }
  if(nh == 1) {
    document.getElementById('hourer').innerHTML = 'hour';
  }
  if(nd == 1) {
    document.getElementById('minuter').innerHTML = 'minute';
  }

  document.getElementById('minutes').innerHTML = nm;
  document.getElementById('hours').innerHTML = nh;
  document.getElementById('days').innerHTML = nd;
}

function drain() {  
  let x = document.getElementById('soot');
  x.classList.add('haha');

  setTimeout(dump, 2000);
}

function dump() {
  window.open('https://san-wo-canoe.herokuapp.com/', '_self');
}