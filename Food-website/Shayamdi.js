document.addEventListener('DOMContentLoaded',function(){
   const sidebar = document.querySelector('.sidebar');
   const navlinks = document.querySelector('.nav-links');
   const carticon = document.querySelectorAll('.cart-icon');
   const cartCount = document.querySelector('.cart-count');

   const body = document.body;

   sidebar.addEventListener('click',function(){
    navlinks.classList.toggle('show')
   });

   let count = 0;
   carticon.forEach(icon => {
    icon.addEventListener('click',function(){
      count++;
      cartCount.textContent = count;
    });
   });

});