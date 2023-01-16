let divs = document.querySelectorAll(".div");
divs.forEach((div) => {
  
let divShadow = div.querySelector(".div-shadow");

div.addEventListener('mousemove', (event) => {
  // Show the shadow
  divShadow.classList.add("active");
  
  // Set shadow position to cursor position
  divShadow.style.left = (event.clientX - div.offsetLeft)+"px";
  divShadow.style.top = (event.clientY - div.offsetTop)+"px";
});

div.addEventListener('mouseout', (event) => {
  // Show the shadow
  divShadow.classList.remove("active");
});
  });