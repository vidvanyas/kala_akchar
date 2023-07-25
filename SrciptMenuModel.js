
const address =document.querySelector('.mob-ads');
const myprofile =document.querySelector('.mob-myp');
const mobMenu =document.querySelector('.mob_menu_bar');
const bottom_model =document.querySelector('.mob_bottom_model');
const bottom_wraper =document.querySelector('.bottom_wraper');

address.addEventListener('click',()=>{
  address.classList.add('user_sidelink_active')
  myprofile.classList.remove('user_sidelink_active')
  bottom_model.classList.remove('scale-1');
  bottom_wraper.classList.remove('scale-1');
})
myprofile.addEventListener('click',()=>{
  myprofile.classList.add('user_sidelink_active')
  address.classList.remove('user_sidelink_active')
  bottom_model.classList.remove('scale-1');
  bottom_wraper.classList.remove('scale-1');
})
mobMenu.addEventListener('click',()=>{
  bottom_model.classList.add('scale-1');
  bottom_wraper.classList.add('scale-1');

})
bottom_wraper.addEventListener('click',()=>{
  bottom_model.classList.remove('scale-1');
  bottom_wraper.classList.remove('scale-1');

})
