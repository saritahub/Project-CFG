const toggleButton = document.getElementsByClassName('toggle-button')[0]

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 

// document.getElementById(“sendmessage”).onsubmit = function() {myFunction()};
// function myFunction() {
//   alert(“Thank you for your message”);
// }

// Sandra 22/6 Contact form Javascript

function ClosePopUp(){
    my_popup.style.display="none";
}
setTimeout(ClosePopUp,120000)

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

