// <!-- ========================Login Form======================== -->

 const logi = document.querySelector("#logpage");
 const regi = document.querySelector("#regpage");
 const otp = document.querySelector("#Otppage");
 const loginBtn = document.querySelector(".log");
 const regBtn = document.querySelector(".reg");

 function togglelogin() {
   loginBtn.classList.add('login_btn_active')
   regBtn.classList.remove('login_btn_active')
   logi.classList.remove('hide');
   otp.classList.add('hide');
   regi.classList.add('hide')
 }
 function toggleregister() {
   logi.classList.add('hide');
   otp.classList.remove('hide');
   loginBtn.classList.remove('login_btn_active')
   regBtn.classList.add('login_btn_active')
 }
 function toggleOtp() {
   logi.classList.add('hide');
   regi.classList.remove('hide');
   otp.classList.add('hide');

 }

// <!-- ========================PopUp Model====================== -->


const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const BtnLogin = document.querySelector('.loginBtn');

  function openPopUp() {
    popup.classList.add('open-popup');
    overlay.classList.add('visibilty-v');

  }

// BtnLogin.addEventListener('click', () => {
//     popup.classList.add('open-popup');
//     overlay.classList.add('visibilty-v');
//   })

function closePopUp() {
  popup.classList.remove('open-popup');
  overlay.classList.remove('visibilty-v');

}



