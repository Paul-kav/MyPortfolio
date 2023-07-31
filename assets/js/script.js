let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
    link.addEventListener("click", function() {
      // 1. Remove "active" class from the currently active link in navigation
      document.querySelector("nav ul li a.active").classList.remove("active");
  
      // 2. Add "active" class to the clicked link
      link.classList.add("active");
  
      // 3. Remove "active" class from the currently active section in main
      document.querySelector("main > section.active").classList.remove("active");
  
      // 4. Add "active" class to the section associated with the clicked link
      document.querySelector(`main > section${link.getAttribute('href')}`).classList.add("active");
    });
  });

//   //responsive mobile bars opening and closing
  document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("open");
  });
 


  