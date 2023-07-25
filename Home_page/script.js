// <!-- =======================Dashbord Active Link================= -->
var addressBtn = document.querySelector('.ads');
var profileBtn = document.querySelector('.myp');

addressBtn.addEventListener('click', () => {
  addressBtn.classList.add('user_sidelink_active');
  profileBtn.classList.remove('user_sidelink_active');
})
profileBtn.addEventListener('click', () => {
  addressBtn.classList.remove('user_sidelink_active');
  profileBtn.classList.add('user_sidelink_active');
})


// ===============================CheckOut Page=======================

    function addressPage() {
        var dots = document.getElementsByClassName('navi_dot');
        dots[0].classList.add('navi_active');
        dots[1].classList.remove('navi_active');
        dots[2].classList.remove('navi_active');



    }
    function changePage() {
        var dots = document.getElementsByClassName('navi_dot');
        dots[0].classList.add('navi_active');
        dots[1].classList.add('navi_active');
        dots[2].classList.remove('navi_active');



    }
    function paymentPage() {
        var dots = document.getElementsByClassName('navi_dot');
        dots[0].classList.add('navi_active');
        dots[1].classList.add('navi_active');
        dots[2].classList.add('navi_active');
    }

// ==========================Quantity Btn Functions =========================

const plus = document.querySelector("#positive"),
  minum = document.querySelector("#negative"),
  num = document.querySelector("#quaintity");

let value = '01';
num.value = value;

num.addEventListener('change', () => {
  value = num.value;
});

plus.addEventListener("click", () => {
  value++;
  value = (value < 10) ? "0" + value : value; num.value = value;
}); minum.addEventListener("click", () => {
  if (value > 1) {
    value--;
    value = (value < 10) ? "0" + value : value; num.value = value;
  }
})
const main_img = document.querySelector('.image_box'); const
  setActive = document.querySelectorAll('.setActive'); const images = document.querySelectorAll('.b'); const
    img = document.querySelectorAll('.a'); const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size'); const links = document.querySelectorAll('.link');
setActive.forEach((Box, index) => {
  Box.addEventListener('click', () => {
    setActive.forEach(box => box.classList.remove('product_active'));
    Box.classList.add('product_active');
  });

});
// ==========================Color add active =========================

colors.forEach((color, index) => {
  color.addEventListener('click', () => {
    colors.forEach(clr => clr.classList.remove('circle_active'));
    color.classList.add('circle_active');
  });
});
// ==========================Size add active =========================
sizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    sizes.forEach(clr => clr.classList.remove('size_active'));
    size.classList.add('size_active');
  });
});
// ==========================Link Header add active =========================

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    links.forEach(clr => clr.classList.remove('active'));
    link.classList.add('active');
  });
});

// const popup = document.getElementById('popup');
// const overlay = document.getElementById('overlay');

// function openPopUp() {
//   popup.classList.add('open-popup');
//   overlay.classList.add('visibilty-v');

// }

// function closePopUp() {
//   popup.classList.remove('open-popup');
//   overlay.classList.remove('visibilty-v');

// }






