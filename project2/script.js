
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 0;
    document.body.classList.toggle('scrolled', scrolled);
  });

  
document.addEventListener("DOMContentLoaded", function() {
var boxes = document.querySelectorAll('.smoothtran');

function checkScroll() {
var triggerBottom = window.innerHeight * 0.8;

boxes.forEach(box => {
  var boxTop = box.getBoundingClientRect().top;

  if (boxTop < triggerBottom) {
    box.classList.add('show');
  } else {
    box.classList.remove('show');
  }
});
}

checkScroll();

window.addEventListener('scroll', checkScroll);
});




