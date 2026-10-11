const menuBtn=document.querySelector(".menu-btn");
const mobileMenu=document.querySelector(".mobile-menu");
menuBtn.addEventListener("click",()=>mobileMenu.classList.toggle("open"));

document.querySelectorAll(".mobile-menu a").forEach(a=>{
  a.addEventListener("click",()=>mobileMenu.classList.remove("open"));
});

const navLinks=document.querySelectorAll(".desktop-nav a");
const sections=[...document.querySelectorAll("main section[id]")];

window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-160) current=section.id;
  });
  navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });
});
