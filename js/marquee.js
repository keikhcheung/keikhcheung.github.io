function calcSpeed(speed) {
  // Time = Distance/Speed
  var spanSelector = document.querySelectorAll('.marquee--content');
  // console.log(spanSelector)
  var swapSelector = document.querySelectorAll('.item-collection-1');
  // console.log(swapSelector)

  // Loop through NodeList from spanSelector (.querySelectorAll) AND apply values coorespondingly
  for (var i = spanSelector.length - 1; i >= 0; i--) {
    var spanLength = spanSelector[i].offsetWidth;
    // console.log(spanLength)
    var timeTaken = spanLength / speed;
    // console.log(timeTaken)
    spanSelector[i].style.animationDuration = timeTaken + "s";
    swapSelector[i].style.animationDuration = timeTaken + "s";
  }
}
calcSpeed(70);   /* smaller the slower */

/*
 * Single marquee (original)

function calcSpeed(speed) {
  // Time = Distance/Speed
  var spanSelector = document.querySelector('.marquee--content');
  var swapSelector = document.querySelector('.item-collection-1');
  var spanLength = spanSelector.offsetWidth;
  var timeTaken = spanLength / speed;
  spanSelector.style.animationDuration = timeTaken + "s";
  swapSelector.style.animationDuration = timeTaken + "s";
}
calcSpeed(70);   // smaller the slower

 *
 */


/*
 * Single faster marquee (original)
function calcFastSpeed(speed) {
  // Time = Distance/Speed
  var spanSelector = document.querySelector('.fast.marquee span');
  var spanLength = spanSelector.offsetWidth;
  var timeTaken = spanLength / speed;
  spanSelector.style.animationDuration = timeTaken + "s";
}
calcFastSpeed(500);

 *
 */