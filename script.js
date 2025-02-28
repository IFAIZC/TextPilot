// copy and paste function
document.addEventListener("DOMContentLoaded", function () { 
  const copyButtons = document.querySelectorAll(".copyButton"); // Select all copy buttons

  for (let i = 0; i < copyButtons.length; i++) {
    const button = copyButtons[i]; // Get the current button

    // Attach click event listener to each button
    button.addEventListener("click", function () { 
      const section = button.closest("section"); // Find the closest section
      const text = section.querySelector(".text-content").innerText; // Get text when clicked
      const message = section.querySelector(".copyMessage"); // Get message when clicked

      // Copy function & display "Copied!"
      navigator.clipboard.writeText(text).then(function () { 
        message.style.display = "inline"; // Show "Copied!"
        setTimeout(function () {
          message.style.display = "none"; // Hide after 2s
        }, 2000);
      }).catch(function () {
        alert("Failed to copy text.");
      });
    });
  }
});

// get modal elements
let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("open-modal");
let closeModalBtn = document.getElementById("close-button");

// functions to make buttons/modal functional
function openModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.display = "none"; // Hide modal
  }
});

// event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", hideModal);


// taking user input from modal

// user to type in title
// user to type in content
// user press save button
// save button will then store the inputs in a chrome.storage.local
// we then retrive the chrome.storage.local to display it on the extension.

// declaring value to a variable. able to recall this when needed.

// to take value from user inputs and display it on the html
function submitUserInputModal() {
  
  // identifying user input value into a variable
  let userInputTitle = document.getElementById("title-input").value;
  let userInputContent = document.getElementById("bodyInput").value;

  document.getElementById("output").innerHTML += `
  <strong>${userInputTitle}</strong> <br>
  ${userInputContent} <br>
  `

  // empty inputs once input is submitted
  userInputTitle = document.getElementById("title-input").value = "";
  userInputContent = document.getElementById("bodyInput").value = "";
}

document.getElementById("saveNote").addEventListener("click", submitUserInputModal);

