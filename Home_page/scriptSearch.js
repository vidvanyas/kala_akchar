
// <!-- =======================Search Bar================= -->
const getFuncClasses = document.querySelectorAll('.getfunc');
var user_profile = document.querySelector('.user_profile');
const search = document.querySelector('.getsearch');
const clears = document.querySelector('.close');
const getback = document.querySelector('.getback');
const searchIcon = document.querySelector('.srch');
const arrowIcon = document.querySelector('.arro');
const inoutbox = document.querySelector('#inoutbox');

function searchfull() {
  getFuncClasses.forEach((fcl) => {
    fcl.classList.add('hide');
  });
  search.classList.add('wh-100');
  clears.classList.remove('hide');
  searchIcon.classList.add('hide');
  arrowIcon.classList.remove('hide');
  getback.classList.add('back_arrow');
}

clears.addEventListener('click', () => {
  inoutbox.value = '';
})

function closes() {
  search.classList.remove('wh-100');
  user_profile.classList.add('mob_dis_b');
  search.classList.remove('dis-f');
  clears.classList.add('hide');
  getFuncClasses.forEach((fcl) => {
    fcl.classList.remove('hide');
    arrowIcon.classList.add('hide');
    getback.classList.remove('back_arrow')

  });

}

// ===============================Mobile Search=======================


var mobLink = document.querySelectorAll('.mob_link');
var getsearch = document.querySelector('.getsearch');
var mobSearchBtn = document.querySelector('.mob_search_btn');

mobSearchBtn.addEventListener('click', () => {
  getsearch.classList.add('dis-f');
  user_profile.classList.remove('mob_dis_b');

})
// mobSearchBtn.addEventListener('click',()=>{
//   // getsearch.classList.add('wh-100');
//   getsearch.classList.add('dis-f');
//   // console.log("click");

// })

mobLink[0].addEventListener('click', () => {
  mobLink[0].classList.add('mob_menu_active');
  mobLink[1].classList.remove('mob_menu_active');
  mobLink[2].classList.remove('mob_menu_active');
})
mobLink[1].addEventListener('click', () => {
  mobLink[0].classList.remove('mob_menu_active');
  mobLink[1].classList.add('mob_menu_active');
  mobLink[2].classList.remove('mob_menu_active');
})
mobLink[2].addEventListener('click', () => {
  mobLink[0].classList.remove('mob_menu_active');
  mobLink[1].classList.remove('mob_menu_active');
  mobLink[2].classList.add('mob_menu_active');
})

