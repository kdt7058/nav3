const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".all-links");
    const navlinks = document.querySelectorAll(".all-links li");

    burger.addEventListener("click",() => {
        nav.classList.toggle('nav-active');
        
        navlinks.forEach((link, index) => {
            link.style.animation = 'navLinkFades 0.5s ease forwards ${index /7 +0.3}s';
        });
    });

    
}
navSlide();

console.log("Hello");