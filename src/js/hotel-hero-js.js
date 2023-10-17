const nextBtn = document.querySelector('.slider-btn-first');
console.log(nextBtn);

function prev() {
  document.getElementById('hotel-slider-container').scrollLeft -= 270;
}

function next() {
  document.getElementById('hotel-slider-container').scrollLeft += 270;
}

$('.hotel-img-item img').on('click', function () {
  $(this).toggleClass('zoomed');
  $('.overlay').toggleClass('active');
});