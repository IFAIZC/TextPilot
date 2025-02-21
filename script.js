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
