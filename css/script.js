$(".s3-bottom-div").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  //   arrows:false,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 2,
        dots: true,
      },
    },
  ],
});
function plan1() {
  document.getElementById("one").src = "./img1.jpg";
  document.getElementById("two").src = "./img1.jpg";
  let active = document.getElementById('alink_1');
        active.classList.add('active-color');
}
console.log("try to check");