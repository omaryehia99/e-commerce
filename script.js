/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


 function openMenu(evt, genderName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(genderName).style.display = "block";
  evt.currentTarget.className += " active";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var floater=document.querySelector(".floater")

      var addBasket=document.querySelector(".fa-solid.fa-plus")
      addBasket.onclick=function(){
        floater.style.display="block"
      }

      var product_incrementer=document.querySelectorAll(".increment_price")
      var product_decrementer=document.querySelectorAll(".decrement_price")
      var product_cnt=document.querySelectorAll(".product_count")
      var counter=1;
      var actual_price=120;
      var price_tag=document.querySelectorAll(".price")
        
      product_cnt.forEach(counte=>{counte.innerHTML=counter})
      
      product_incrementer.forEach(increment=>{increment.onclick=()=>{counter++;
        product_cnt.forEach(counte=>{counte.innerHTML=counter})
        price_tag.forEach(tag=>{tag.innerHTML=actual_price*counter;})}})
      product_decrementer.forEach(decrement=>{decrement.onclick=()=>{
          if(counter==0){
            floater.style.display="none"
          }
          else{
            counter--
          }
         product_cnt.forEach(counte=>{counte.innerHTML=counter})
         price_tag.forEach(tag=>{tag.innerHTML=actual_price*counter;})
        }})


        var cart_terminator=document.querySelector(".close_sign")
        var entire_cart=document.querySelector(".full_cart")

        cart_terminator.onclick=function(){
          entire_cart.style.zIndex="-1"
          entire_cart.style.opacity="0"
        }
