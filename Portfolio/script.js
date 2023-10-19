// Script Navigation Menu Js code
let nav =document.querySelector("nav");
let scrollBtn =document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onsccroll -function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.Style.display ="block";    
    }else{
        nav.classList.remove("sticky");
        scrollBtn.Style.display ="none";
    }
}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn= document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents ="none";
    body.style.overflow ="hidden";
    scrollBtn.style.pointerEvents ="none";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents ="auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close while we click on Navigation Links
let navLinks = document.querySelectorAll(" .menu li a");
for (var i =0;i < navLinks.lengtht; i++) {
    navLinks[i].addEventListener("click") , function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        
        var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classlist.remove("active-link");
        } 
        for(tabcontent of tabcontents){
            tabcontent.classlist.remove("active-tab");
        }
        event.currentTarget.classlist.add("active-link"); 
        document.getElementById(tabname).classList.add("active-tab");
    }}
    };
