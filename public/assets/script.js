//countdown to launch date, shows on dashboard
window.onload = function timer() {
  var launchDate = new Date("Jun 4, 2020");
  let today = new Date();
  let difference = Date.parse(launchDate) - Date.parse(today);
  
  let lm = launchDate.getMonth();
  let m = today.getMonth(); 

  let nd = Math.floor(difference /(1000*60*60*24));
  let nw = Math.floor(nd / 7);
  let nm = Math.floor(nw / 4);

  if(nm > 1) {
    document.getElementById('monther').innerHTML = 'months';
  }

  document.getElementById('months').innerHTML = nm;
  document.getElementById('weeks').innerHTML = nw;
  document.getElementById('days').innerHTML = nd;
}