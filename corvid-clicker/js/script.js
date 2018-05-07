var clickableElem = document.getElementById('clickable');
var displayCountElem = document.getElementById('count');
var count = 0;

clickableElem.addEventListener('click', function(){
  count++;
  displayCountElem.innerHTML = count;
}, false);

