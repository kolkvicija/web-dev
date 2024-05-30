
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

// script.js

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Get all thumbnails
var thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-full');
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// FAQ
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          var targetId = this.getAttribute('data-target');
          var target = document.getElementById(targetId);

          if (target.style.display === 'none' || target.style.display === '') {
              target.style.display = 'block';
          } else {
              target.style.display = 'none';
          }
      });
  });
});

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}