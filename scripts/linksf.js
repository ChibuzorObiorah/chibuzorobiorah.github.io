
var progressBar = document.querySelector('.progress-bar');


// get all document height
var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

// get viwport height
var vHeight = document.documentElement.clientHeight;

var stopPosition = scrollHeight - vHeight;

// convert window.pageYOffset, and stopPosition
// return percent vale
function getProcent(stopPos, curPos){
  var percent = stopPos/100;
  var curPercent = curPos/percent;
  return curPercent;
}

window.addEventListener('scroll', function(){
  var curPosition = window.pageYOffset;
  var w = Math.round(getProcent(stopPosition, curPosition)) + '%';
  progressBar.style.width = w;
})
