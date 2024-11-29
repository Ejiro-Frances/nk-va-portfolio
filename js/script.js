const header = document.querySelector("header")
const mobileMenu = document.querySelector("#hamburger-menu")
const navBar = document.querySelector(".nav-links")
const mobileIcon = document.getElementById("mobile-icon")
const mobileLinks = document.querySelectorAll(".nav-links li a")
const main = document.querySelector("main")


// Update p-tag

// Sentences to display
// const sentences = [
//     "Virtal Assistant",
//     "We bring you the best services.",
//     "Your satisfaction is our priority."
//   ];
  
//   // Select the p-tag
//   const heroText = document.getElementById("hero-text");
  
//   // Set the initial index
//   let index = 0;
  
//   // Function to update the text
//   function updateText() {
//     heroText.textContent = sentences[index];
//     index = (index + 1) % sentences.length; // Loop back to the first sentence
//   }
  
  // Update text every 3 seconds
//   setInterval(updateText, 3000);
  
  // Initialize the first sentence
//   updateText();
  

// Functions

// Function to toggle hide

function toggleVisibility(element, show){
    if(show){
        element.classList.toggle("active")
    }
}

// on scroll add styles to header
window.addEventListener("scroll", () =>{
    if(window.scrollY > 0) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})


// add eventlistener to the mobile menu
mobileMenu.addEventListener("click", () => {
   
    toggleVisibility(navBar, true)
    mobileIcon.classList.toggle('fa-bars');
    mobileIcon.classList.toggle('fa-x')
})

// Remove the navbar when a link is clicked
// Add the button being clicked to this event
mobileLinks.forEach((mobileAnchor => {
    mobileAnchor.addEventListener("click", () => {
        navBar.classList.remove("active")
        mobileIcon.classList.add('fa-bars');
    mobileIcon.classList.remove('fa-x')
})
}))

// Remove the navBar when any part of the body is clicked
main.addEventListener("click", () => {
    navBar.classList.remove("active")
    mobileIcon.classList.add('fa-bars');
mobileIcon.classList.remove('fa-x')
})