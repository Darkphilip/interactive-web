let windowWidth, windowHeight;

window.onload = function() {
  let _cards = document.querySelectorAll(".cardItem");
  let _buttonAll = document.querySelectorAll("button");
  let pageNum = 0;

  for (let i = 0; i < _buttonAll.length; i++) {
    (function(idx) {
      _buttonAll[idx].onclick = function() {
        pageNum = idx;
        cardSetting();
      }
    })(i);
  }

  TweenMax.from("h1", 1, {
    top: -50,
    autoAlpha: 0,
    ease: Power3.easeOut
  })

  _buttonAll.forEach(function(item, i) {
    TweenMax.from(item, 0.4, {
      top: 100,
      autoAlpha: 0,
      ease: Power3.easeInOut,
      delay: i * .1 + 1,
    })
  })

  TweenMax.set("section", {perspective: 400});

  function cardSetting() {
    for (let i = 0; i < _buttonAll.length; i++) {
      _buttonAll[i].classList.remove("active");
    }
    _buttonAll[pageNum].classList.add("active");

    if(pageNum === 0) {
      _cards.forEach(function(item, i) {
        TweenMax.to(item, 1, {
          top : windowHeight / 2 - i * 50,
          left : windowWidth / 2 + i * 60 - 200,
          rotationX : 0, 
          rotationY : 0, 
          rotationZ : 0,
          ease : Power4.easeInOut, 
          delay : i * .15
        })
      })
    } else if (pageNum === 1) {
      _cards.forEach(function(item, i){
        TweenMax.to(item, 1, {
            top : Math.random() * (windowHeight - 300) + 100,
            left : Math.random() * (windowWidth - 300) + 100, 
            rotationX : "random(-60,60)", //Math.random()*30 
            rotationY : "random(-60,60)", 
            rotationZ : "random(-90,90)",
            //scale : Math.random() * .6 + .6,
            ease : Power4.easeInOut, 
            delay : "random(0,.5)"
        })
      })
    } else if (pageNum === 2) {
      _cards.forEach(function(item, i){
        TweenMax.to(item, 1, {
            top : windowHeight / 2 + i * 30 - 100,
            left : windowWidth / 2 - i * 80 ,
            rotationX : 0,
            rotationY : -10 * i,
            rotationZ : 20 * i,
            ease : Power4.easeInOut, 
            delay : i * .15
        })
      })
    } else if (pageNum === 3) {
      _cards.forEach(function(item, i){
        TweenMax.to(item, 1, {
            top : windowHeight / 2 - 100 * i,
            //left : windowWidth / 2 - 100 * i,
            rotationX : 20,
            rotationY : 30,
            rotationZ : 180 * i,
            ease : Power4.easeInOut, 
            delay : i * .15
        })
      })
    }
  }
  
  window.addEventListener('resize', function(){
    resize();
  });

  function resize(){
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
      cardSetting();
  }

  resize();

}