// Counter Function
let numCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2500,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;
$(window).scroll(function () {
  let top = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= top) {
    a++;
    numCount(".rectangle > h1");
  }
});
