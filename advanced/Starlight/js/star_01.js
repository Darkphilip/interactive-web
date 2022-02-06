window.onload = function() {
  let $starBg = document.querySelector(".starBg");
  let $title = document.querySelector(".title");

  window.addEventListener("scroll", function(event) {
    let scroll = this.scrollY;
    $starBg.style.transform = "translateY(" + -scroll/3 +"px)";
    $title.style.transform = "translateY(" + scroll/1.7 +"px)";
  });

  setTimeout(() => {
    window.scrollTo({
      top: document.querySelector('.bottom').offsetTop,
      behavior: 'smooth'
    });
  }, 2000)
}