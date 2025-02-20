// DOMContentLoaded ensures the script runs only after the HTML is fully loaded.
document.addEventListener("DOMContentLoaded", function () { 
  // Select all copy buttons
  const copyButtons = document.querySelectorAll(".copyButton");

  // Loop through each button using a for loop
  for (let i = 0; i < copyButtons.length; i++) {
    const button = copyButtons[i]; // Get the current button

    button.addEventListener("click", function () { 
      const section = button.closest("section"); // Get the parent section
      const textContent = section.querySelector(".text-content").innerText; // Get text
      const copyMessage = section.querySelector(".copyMessage"); // Find the "Copied!" message

      // Copy to clipboard
      navigator.clipboard.writeText(textContent).then(() => {
        copyMessage.style.display = "inline"; // Show message
        setTimeout(() => {
          copyMessage.style.display = "none"; // Hide after 2s
        }, 2000);
      }).catch(err => console.error("Copy failed:", err));
    });
  }
});

