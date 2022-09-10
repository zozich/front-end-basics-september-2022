// alert("Hello world");

console.log($('.info-item'));

$('.show-all').click(function () {
  // alert('It works!');
  $('.slider').slideToggle();
})

$('.slider').slick({
  slidesToShow: 4,
});