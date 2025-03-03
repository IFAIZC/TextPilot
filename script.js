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

  // Title Container (Holds Title + Copy Button)
  let titleContainer = document.createElement("div");
  titleContainer.classList.add("section-header"); // Style in CSS

  // Title Section
  let titleDiv = document.createElement("div");
  titleDiv.classList.add("section-header"); // Style in CSS
  titleDiv.innerHTML = `<h4>${userInputTitle}</h4>`;

  // Copy Button
  let copyButton = document.createElement("button");
  copyButton.textContent = "Copy";
  copyButton.classList.add("copyButton"); // Style this in CSS

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
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  });

  // Append Title and Copy Button to Title Container
  titleContainer.appendChild(titleDiv);
  titleContainer.appendChild(copyButton);

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

  // TBA COPY BUTTON FEATURE


  // TBA CHROME.STORAGE.LOCAL
}

document.getElementById("saveNote").addEventListener("click", submitUserInputModal);