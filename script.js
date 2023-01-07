/* Mengaktifkan menu hamburger (garis tiga) */

const hamburger = document.querySelector(".tombol-menu");
const navMenu = document.querySelector("nav .menu ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })


  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  // efek scroll, warna navbar berubah saat di scroll
  function changeNavBg (){
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    const navbar = document.getElementById('navbar');
  
      if(scrollValue < 250){
        navbar.classList.remove('change-background')
      }else {
        navbar.classList.add('change-background')
      }
    }
  

  window.addEventListener('scroll', changeNavBg);