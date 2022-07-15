let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", ()=>{
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move")
});
window.onscroll = () =>{
  navbar.classList.remove("open-menu")
  menu.classList.remove("move")
}
//Review Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // EMail 
  function validate(){
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener("click", (e)=> {
      if (name.value == "" || email.value == "" || msg.value == ""){
      emptyError();
    }else{
      success()
    }
    })
  }
  validate();

  function emptyError(){
    swal({
      title: "Ups",
      text: "Los campos no pueden quedar vacios",
      icon: "error",
    })
  }
  function success(){
    swal({
      title: "Por favor",
      text: "Completa el siguiente captcha",
      icon: "success",
    })
  }
  // Header Background Change On Scroll
  let header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0)
  })
// Scroll Top
let scrollTop = document.querySelector(".scroll-top")
  window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 400)
  })
  console.log("hello world");