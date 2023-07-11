//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.classList.add('show'); // Add the 'show' class
  } else {
    mybutton.classList.remove('show'); // Remove the 'show' class
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.blur(); // Remove focus from the button
}
