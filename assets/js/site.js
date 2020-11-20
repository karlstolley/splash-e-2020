// Add the short-link overlay structure to the DOM
var short_link = document.querySelector('#short-link');
var p = document.createElement('p');
var a = document.createElement('a');
p.className = 'link-overlay';
a.innerText = short_link.innerText;
a.href = short_link.href;
p.appendChild(a);
document.querySelector('#poster').appendChild(p);


window.addEventListener('keyup', function(e) {
  // Toggle the visibility of gridlines when `g` is pressed
  if (e.keyCode === 71) {
    document.querySelector('html').classList.toggle('g');
  }
  // Toggle a short-link overlay when `u` is pressed
  if (e.keyCode === 85) {
    document.querySelector('.link-overlay').classList.toggle('active');
  }
});
