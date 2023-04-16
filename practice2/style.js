// Get the button and the features section
const button = document.querySelector('.button');
const features = document.querySelector('#features');

// Scroll to the features section when the button is clicked
button.addEventListener('click', function(event) {
  event.preventDefault();
  features.scrollIntoView({behavior: 'smooth'});
});

// Add a "sticky" class to the header when the user scrolls past the hero section
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const heroHeight = document.querySelector('#hero').clientHeight;
  
  if (window.pageYOffset >= heroHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
