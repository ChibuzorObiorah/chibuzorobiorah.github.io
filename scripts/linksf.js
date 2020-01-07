
var progressBar = document.getElementById("progress-bar");


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
function getPercent(stopPos, curPos) {
  var percent = stopPos/100;
  var curPercent = curPos/percent;
  return curPercent;
}

window.addEventListener('scroll', function(){
  var curPosition = window.pageYOffset;
  var w = Math.round(getPercent(stopPosition, curPosition)) + '%';
  progressBar.style.width = w;

});


$(document).ready(function() {

  //FIRST SLIDESHOW//

  var paused = false;
  
  $('.right-arrow').click(function() {
    paused = true;
    $('#slideshow > div:first').fadeOut(1000)
    .next()
    .fadeIn(800)
    .end()
    .appendTo('#slideshow');
  });


  $('.left-arrow').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(800)
		.prependTo('#slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});
   

  //SECOND SLIDESHOW//
  $('.second-right-arrow').click(function() {
    paused = true;
    $('#second-slideshow > div:first').fadeOut(1000)
    .next()
    .fadeIn(800)
    .end()
    .appendTo('#second-slideshow');
  });

  $('.second-left-arrow').click(function() {
		paused = true;
		$('#second-slideshow > div:last')
		.fadeIn(800)
		.prependTo('#second-slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});

});