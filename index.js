


$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    }
    else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slides-up-script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  //toggle menu navbar script
  $('.menu-btn').click(function () {
    $(" .navbar .menu").toggleClass("active")
    $(".menu-btn i ").toggleClass("active")
  });


  //typing menu navbar script
  var typed = new Typed(".typing", {
    strings: ["Financial Planning", "Business Management", "Business Growth"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed(".typing-2", {
    strings: ["Freelancer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed(".typing-3", {
    strings: ["web Developer", "web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })



  //owl-carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


//script to download the cv

$(document).ready(function () {
  $("#link").click(function (e) {
    e.preventDefault();
    window.location.href = "cv.pdf";
  });
});

//read more script
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
