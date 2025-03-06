// COPY PASTE FUNCTION
document.addEventListener("DOMContentLoaded", function () { 
  const copyButtons = document.querySelectorAll(".copyButton"); // Select all copy buttons

  for (let i = 0; i < copyButtons.length; i++) {
    const button = copyButtons[i]; // Get the current button

    // Attach click event listener to each button
    button.addEventListener("click", function () { 
      const section = button.closest("section"); // Find the closest section
      const text = section.querySelector(".text-content").innerText; // Get text when clicked

      // Copy function & display "Copied!"
      navigator.clipboard.writeText(text).then(function () { 
        button.innerText = "Copied"; // Show "Copied!"
        button.disabled = true; // Optional: Disable button after copying

        setTimeout(function () {
          button.textContent = "Copy"; // Hide after 2s
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

  // Creating new div element on noteDiv, styling it with section-card via CSS
  let noteDiv = document.createElement("div");
  noteDiv.classList.add("section-card");

  // Title Container (Holds Title + Buttons)
  let titleContainer = document.createElement("div");
  titleContainer.classList.add("section-header"); // Style in CSS

  // Title Section
  let titleDiv = document.createElement("div");
  titleDiv.innerHTML = `<h4>${userInputTitle}</h4>`;

  // Button Container (Wraps Delete & Copy Buttons)
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container"); // Style in CSS

  // Delete Button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");

  // Copy Button
  let copyButton = document.createElement("button");
  copyButton.textContent = "Copy";
  copyButton.classList.add("copyButton");

  // Copy function
  copyButton.addEventListener("click", function () {
    let textToCopy = userInputContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyButton.textContent = "Copied!"; // Change button text
      copyButton.disabled = true; // Optional: Disable button after copying

      // Reset button text after 2 seconds
      setTimeout(() => {
        copyButton.textContent = "Copy";
        copyButton.disabled = false; // Re-enable button
      }, 1000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  });

  // Append buttons to buttonContainer
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(copyButton);

  // Append Title and Button Container to Title Container
  titleContainer.appendChild(titleDiv);
  titleContainer.appendChild(buttonContainer);

  // Content Section
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("text-content"); // Style in CSS
  contentDiv.innerHTML = userInputContent.replace(/\n/g, "<br>");

  // Append everything to noteDiv
  noteDiv.appendChild(titleContainer); // Instead of titleDiv alone
  noteDiv.appendChild(contentDiv);

  // append noteDiv to output container
  document.getElementById("output").appendChild(noteDiv);

  // clear input fields
  document.getElementById("title-input").value = "";
  document.getElementById("bodyInput").value = "";

  // hides the popup once submitted.
  hideModal()

  // TBA CHROME.STORAGE.LOCAL
  // TO BE CONTINUE ...
}

document.getElementById("saveNote").addEventListener("click", submitUserInputModal);