//  sticky nav bar

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// hamburger sidebar

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a')

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener('click',()=>{
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});

// scrollbtn 

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener('scroll', ()=>{
    scrollBtn.classList.toggle("active",window.scrollY>500);
});

// scroll to top

scrollBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// reveal website on scroll

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}