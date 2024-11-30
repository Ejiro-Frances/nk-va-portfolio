const header = document.querySelector("header")
const mobileMenu = document.querySelector("#hamburger-menu")
const navBar = document.querySelector(".nav-links")
const mobileIcon = document.getElementById("mobile-icon")
const mobileLinks = document.querySelectorAll(".nav-links li a")
const main = document.querySelector("main")
const form = document.querySelector("form")
const fullName =document.querySelector("#name")
const email = document.querySelector("email")
const userMessage = document.querySelector("#user-message")
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


// for form
// const form = document.getElementById("sheetdb-form");

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     fetch(form.ariaDescription, {
//         method : "POST",
//         body: new FormData(document.getElementById("sheetdb-form")),

//     }).then(
//         response => response.json()
//     ).then(html => {
//         // jscode
//         // direct to new page
//         console.log("submitted ")
//     })
// })

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     if(fullName.getAttributeNames() === 0){
//         fullName.innerHTML("Full name required")
//     }
// })



// Function to show the modal
function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");


    // Set the message in the modal
    modalMessage.textContent = message;

    // Show the modal
    modal.style.display = "block";

    // Add event listener to close the modal when the close button is clicked
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  // Add event listener to the form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the modal immediately to indicate form submission is in progress
    showModal("Sending Message...");

    // Perform an AJAX request to submit the form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Successful response
          var response = xhr.responseText;
          showModal(response); // Show the modal with the response message
          form.reset(); //Clear the form fields
        } else {
          // Error response
          showModal("Error: Something went wrong."); // Show a generic error message
        }
      }
    };
    xhr.send(new FormData(this));
  });
