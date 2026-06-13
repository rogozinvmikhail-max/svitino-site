// Mobile burger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');

  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Mark active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
