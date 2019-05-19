// Mobile Navbar
let openSlideMenu = function() {
  document.getElementById('side-menu').style.width = '250px'
  // document.getElementById('main').style.marginRight = '250px'
  document.getElementById('main').style.overflow = 'hidden'

}

let closeSlideMenu = function() {
  document.getElementById('side-menu').style.width = '0px'
  // document.getElementById('main').style.marginRight = '0px'
  document.getElementById('main').style.overflow = 'scroll'
}




// Parallax Effect


const parallax = document.querySelectorAll(".parallax");
        
  window.addEventListener("scroll", function() {
      
      let offset = window.pageYOffset;
      
      parallax.forEach(function(prllx, i) {
      
          prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
      })
  })


  
