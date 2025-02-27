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

  // Predefined text storage for autocomplete suggestions (newly added)
  const predefinedTexts = [
    document.getElementById('reservationText').innerText.trim(),
    document.getElementById('interstoreText').innerText.trim(),
    document.getElementById('notCarryText').innerText.trim()
  ];

  // Autocomplete functionality for input fields (newly added)
  document.addEventListener('input', (event) => {
    const target = event.target;
    const isInputField = target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea';
    const isWhatsAppInput = target.classList.contains('copyable-text'); // WhatsApp Web input field class
    if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
      const query = target.value.toLowerCase();
      let suggestionsDiv = document.getElementById('suggestionsDiv');

      if (isInputField || isWhatsAppInput) {
        const query = target.value.toLowerCase();
        let suggestionsDiv = document.getElementById('suggestionsDiv');
      }

      // Style and position the suggestions div dynamically (newly added)
      suggestionsDiv.innerHTML = '';
      suggestionsDiv.style.position = 'absolute';
      suggestionsDiv.style.border = '1px solid #ccc';
      suggestionsDiv.style.backgroundColor = 'white';
      suggestionsDiv.style.zIndex = '1000';
      suggestionsDiv.style.maxHeight = '150px';
      suggestionsDiv.style.overflowY = 'auto';
      suggestionsDiv.style.width = `${target.offsetWidth}px`;
      suggestionsDiv.style.top = `${target.offsetTop + target.offsetHeight}px`;
      suggestionsDiv.style.left = `${target.offsetLeft}px`;

      if (query) {
        // Filter suggestions based on user input (newly added)
        const suggestions = predefinedTexts.filter(text => text.toLowerCase().includes(query));
        suggestions.forEach(suggestion => {
          const suggestionElement = document.createElement('div');
          suggestionElement.textContent = suggestion;
          suggestionElement.style.padding = '10px';
          suggestionElement.style.cursor = 'pointer';
          suggestionElement.addEventListener('click', () => {
            target.value = suggestion; // Auto-fill input when clicked
            suggestionsDiv.innerHTML = '';
          });
          suggestionsDiv.appendChild(suggestionElement);
        });
      }

      // Automatically hide suggestions when focus is lost (newly added)
      target.addEventListener('blur', () => {
        setTimeout(() => {
          if (document.body.contains(suggestionsDiv)) {
            suggestionsDiv.innerHTML = '';
          }
        }, 100);
      });
    }
  });
});

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