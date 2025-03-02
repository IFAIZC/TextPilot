// COPY PASTE FUNCTION
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





// CREATING MODAL POPUP
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





// POPUP USER INPUT
function submitUserInputModal() {
  
  // identifying user input value into a variable
  let userInputTitle = document.getElementById("title-input").value;
  let userInputContent = document.getElementById("bodyInput").value;

  // handling egde cases if input is empty
  if (userInputTitle === "" || userInputContent === ""){
    alert("Please fill in the title & body!");
    return;
  }

  // creaating new div element on noteDiv , styling it with section-card via css
  let noteDiv = document.createElement("div");
  noteDiv.classList.add("section-card");

  // Title Section
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("section-header"); //style on css
  titleDiv.innerHTML = `<h4>${userInputTitle}</h4>`;

  // Content Section
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("text-content"); //style on css
  contentDiv.innerHTML = userInputContent.replace(/\n/g, "<br>");

  // Append title and content to noteDiv
  noteDiv.appendChild(titleDiv);
  noteDiv.appendChild(contentDiv);

  // append noteDiv to output container
  document.getElementById("output").appendChild(noteDiv);

  // clear input fields
  document.getElementById("title-input").value = "";
  document.getElementById("bodyInput").value = "";

  // hides the popup once submitted.
  hideModal()

  // TBA COPY BUTTON FEATURE
  // TBA CHROME.STORAGE.LOCAL
}

document.getElementById("saveNote").addEventListener("click", submitUserInputModal);