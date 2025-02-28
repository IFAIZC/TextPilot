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

// event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", hideModal);


// adding custom user input

// function submitInput() {

//   let title = document.getElementById("title").value;
//   let input = document.getElementById("input").value;

//   if (title === "" || input === "") {
//     alert("Please fill in both fields!");
//     return;
//   }

//   // Create a new <p> element
//   let p = document.createElement("p");
//   p.innerHTML = `<strong>${title}</strong> ${input} `;

//   // Pushing new inputs to the arrays (customInput)
//   // let newEntry = { title : title, content: input };
//   // customInput.push(newEntry);

//   // Create a "Copy" button
//   let copyButton = document.createElement("button");
//   copyButton.textContent = "Copy";
//   copyButton.addEventListener("click", function () {
//       navigator.clipboard.writeText(`${input}`);
//       alert("Copied to clipboard!");
//   });

//   // Append button to <p>
//   p.appendChild(copyButton);

//   // Append <p> to the output div
//   document.getElementById("output").appendChild(p);
  
//   // Clear input fields after submission
//   document.getElementById("title").value = "";
//   document.getElementById("input").value = "";
// }

// // making the addButton runs the function submitInput()
// document.getElementById("addButton").addEventListener("click", submitInput);