$(document).ready(function () {
  const slider = $(".services__wrapper");

  if (slider) {
    servicesSlider();
  }
  function servicesSlider() {
    slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      easing: "ease",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    const services__arrow_prev = $(".services__arrow--prev");
    const services__arrow_next = $(".services__arrow--next");
    services__arrow_prev.on("click", function () {
      slider.slick("slickPrev");
    });
    services__arrow_next.on("click", function () {
      slider.slick("slickNext");
    });
  }
});

$(".experience__item").each(function () {
  const count = $(this).attr("data-count")
  console.log(count)
  $(this).roundSlider({
    radius: 90,
    width: 5,
    handleSize: 30,
    handleShape: "dot",
    startAngle: 90,
    slideType: "min-range",
    value: parseInt(count),
    pathColor: "#daae3c",
    borderColor: "none",
    rangeColor: "#fff",
  });
});
// $("#slider2").roundSlider({
//     radius: 100,
//     width: 5,
//     handleSize: 30,
//     handleShape: "dot",
//     startAngle: 90,
//     slideType: "min-range",
//     value: 83,
// })
// $("#slider3").roundSlider({
//     radius: 100,
//     width: 5,
//     handleSize: 30,
//     handleShape: "dot",
//     startAngle: 90,
//     slideType: "min-range",
//     value: 83,
// })
