// SVITINO.TV nav
const burger = document.querySelector('.nav-burger');
const links  = document.querySelector('.nav-links');

if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !links.contains(e.target))
      links.classList.remove('open');
  });
}

const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page || (!page && a.getAttribute('href') === 'index.html'))
    a.classList.add('active');
  else a.classList.remove('active');
});
