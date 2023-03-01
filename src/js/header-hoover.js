const link = document.querySelectorAll('.header-link');
const url = document.location.pathname;
const CLASS = 'ім'я класу до якого причепиш псевдоелемент';
link.forEach(x => {
  if (x.classList.contains(CLASS)) {
    x.classList.remove(CLASS);
  }
  if (url.includes(x.getAttribute('href'))) {
    x.classList.add(CLASS);
    return;
  }
});
if (url === '/встав ім'я свого репо/') {
  link[0].classList.add(CLASS);
}