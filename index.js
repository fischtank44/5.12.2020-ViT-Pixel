window.onload = () => {
    // set currentColor
    let currentColor = 'black'
    // grab container with javascript
    let container = document.querySelector('#container')
    // create div element with .createElement
    
    // created wacky loop
    for (let i = 0; i < 5; i++) {
  
      let div = document.createElement('div')
      // add class of sqr to created element
      div.classList.add('sqr')
      // use .appendChild to add div to container
      container.appendChild(div)
      // add event listener to div
      div.addEventListener('click', function(){
        // change div backgroundColor to black
        div.style.backgroundColor = currentColor
    
    
    
      })
    }
  
  
  
  
    let paletteColor = ['coral', 'green' , 'blue' , 'orange'] 
    // select canvas with javaScript
    let palette = document.querySelector('#palette')
    // change color of palette background with javascript
    palette.style.backgroundColor = paletteColor
    // add eventListener to palette
    palette.addEventListener('click', function(){
      currentColor = 'green'

    })
  
  }

  $(document).ready(function() {
    animateDiv($('.a'));

});

function makeNewPosition($container1) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container1.height() - 50;
    var w = $container1.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}