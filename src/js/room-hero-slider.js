function prev() {
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
  document.getElementById('lider-container').scrollLeft += 270;
}

$('.room-img-item img').on('click', function () {
  $(this).toggleClass('zoomed');
  $('.overlay').toggleClass('active');
});
