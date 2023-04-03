

let read_more_768 = document.getElementById("read_more_768");
let read_more_1120 = document.getElementById("read_more_1120");
const logos_768 = document.querySelectorAll(".hidden_logo_768");
const logos_1120 = document.querySelectorAll(".hidden_logo_1120");
const hidden_logo_768 = document.querySelector(".hidden_logo_768");
const hidden_logo_1120 = document.querySelector(".hidden_logo_1120");
   
read_more_768.addEventListener("click", function () {
    
    for (let hidden_logo_768 of logos_768) { 
if (hidden_logo_768.style.display = "none") { hidden_logo_768.style.display = "flex";}
else {hidden_logo_768.style.display = "none";}
        
    }
})


read_more_1120.addEventListener("click", function () {
    
    for (let hidden_logo_1120 of logos_1120) { 
if (hidden_logo_1120.style.display = "none") { hidden_logo_1120.style.display = "flex"; }
        else { hidden_logo_1120.style.display = "none"; }
        
    }
})


var Swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

