function updateDataScienceTimer() {
  future = Date.parse("April 23, 2022 11:30:00");
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
    `<a class="register-now" href="" target="_blank" rel="noopener noreferrer">ĐĂNG KÝ NGAY</a>`;
}
setInterval("updateDataScienceTimer()", 1000);

function updateSoftwareEngineeringTimer() {
  future = Date.parse("April 17, 2022 11:30:00");
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
    `<a class="register-now" href="" target="_blank" rel="noopener noreferrer">ĐĂNG KÝ NGAY</a>`;
}
setInterval("updateSoftwareEngineeringTimer()", 1000);
