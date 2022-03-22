

function showOrHideDiv() {
    var v = document.getElementById("showOrHide");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide1");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide2");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide3");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide4");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide5");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
  }
  
  function mySlides() {
    var v = document.getElementById("showOrHide");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide6");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide2");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide8");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide69");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide5");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
  }
  
  function plusSlides(){
    var v = document.getElementById("showOrHide6");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide8");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var v = document.getElementById("showOrHide1");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }  var v = document.getElementById("showOrHide69");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }  var v = document.getElementById("showOrHide3");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }  var v = document.getElementById("showOrHide4");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  function reveal() {
   var reveals = document.querySelectorAll(".reveal");
 
   for (var i = 0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = reveals[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
     } else {
       reveals[i].classList.remove("active");
     }
   }
 }
 window.addEventListener("animationstart", reveal);
 


  function animateValue(obj, end, start, duration) {
   let startTimestamp = null;
   const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 4);
     obj.innerHTML = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
       window.requestAnimationFrame(step);
     }
   };
   window.requestAnimationFrame(step);
 }
 
 const obj = document.getElementById("value");
 animateValue(obj, 85, 0, 9000);


 
 function animateValue1(obj1, end, start, duration) {
   let startTimestamp = null;
   const step1 = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress1 = Math.min((timestamp - startTimestamp) / duration, 4);
     obj1.innerHTML = Math.floor(progress1 * (end - start) + start);
     if (progress1 < 1) {
       window.requestAnimationFrame(step1);
     }
   };
   window.requestAnimationFrame(step1);
 }
 
 const obj1 = document.getElementById("value1");
 animateValue1(obj1, 65, 0, 9000);



 function animateValue2(obj2, end, start, duration) {
   let startTimestamp = null;
   const step2 = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress2 = Math.min((timestamp - startTimestamp) / duration, 4);
     obj2.innerHTML = Math.floor(progress2 * (end - start) + start);
     if (progress2 < 1) {
       window.requestAnimationFrame(step2);
     }
   };
   window.requestAnimationFrame(step2);
 }
 
 const obj2 = document.getElementById("value2");
 animateValue2(obj2, 18, 0, 9000);


 function animateValue3(obj3, end, start, duration) {
   let startTimestamp = null;
   const step3 = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress3 = Math.min((timestamp - startTimestamp) / duration, 4);
     obj3.innerHTML = Math.floor(progress3 * (end - start) + start);
     if (progress3 < 1) {
       window.requestAnimationFrame(step3);
     }
   };
   window.requestAnimationFrame(step3);
 }
 
 const obj3 = document.getElementById("value3");
 animateValue3(obj3, 15, 0, 9000);