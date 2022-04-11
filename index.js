function updateDataScienceTimer() {
  future = Date.parse("April 23, 2022 23:59:59");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("data-science-timer").innerHTML =
    "<h2>DATA SCIENCE</h2>" +
    "<div>" +
    d +
    "<span>NGÀY</span></div>" +
    "<div>" +
    h +
    "<span>GIỜ</span></div>" +
    "<div>" +
    m +
    "<span>PHÚT</span></div>" +
    "<div>" +
    s +
    "<span>GIÂY</span></div>" +
    `<a class="register-now" href="https://forms.gle/CbRhMo6KuYNkSZts8" target="_blank" rel="noopener noreferrer">ĐĂNG KÝ NGAY</a>`;
}
setInterval("updateDataScienceTimer()", 1000);

function updateSoftwareEngineeringTimer() {
  future = Date.parse("April 17, 2022 23:59:59");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("software-engineering-timer").innerHTML =
    "<h2>SOFTWARE ENGINEERING</h2>" +
    "<div>" +
    d +
    "<span>NGÀY</span></div>" +
    "<div>" +
    h +
    "<span>GIỜ</span></div>" +
    "<div>" +
    m +
    "<span>PHÚT</span></div>" +
    "<div>" +
    s +
    "<span>GIÂY</span></div>" +
    `<a class="register-now" href="https://forms.gle/yXQC3UheHYt2T4ks9" target="_blank" rel="noopener noreferrer">ĐĂNG KÝ NGAY</a>`;
}
setInterval("updateSoftwareEngineeringTimer()", 1000);

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    document.getElementById("navbar").style.display = "block";
  } else {
    document.getElementById("navbar").style.display = "block";
  }
}

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        1000,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
