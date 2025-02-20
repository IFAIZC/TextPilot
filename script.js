document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const outputContainer = document.getElementById("outputContainer");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Load tasks from localStorage

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
  }

  addTaskButton.addEventListener("click", addTask);

  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent new line in textarea when Enter is pressed alone
      addTask();
    }
  });

  function addTask() {
    const text = userInput.value.trim();
    if (text) {
      tasks.push(text);
      saveTasks(); // Save updated tasks
      userInput.value = ""; // Clear input
      displayTasks();
    }
  }

  function displayTasks() {
    outputContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      const taskContainer = document.createElement("div");
      taskContainer.style.display = "flex";
      taskContainer.style.alignItems = "center";
      taskContainer.style.marginBottom = "5px";

      const p = document.createElement("p");
      p.textContent = tasks[i];
      p.style.marginRight = "10px";

      // Copy Button
      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy";
      copyButton.style.cursor = "pointer";
      copyButton.style.marginRight = "5px";

      copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(tasks[i]).then(() => {
          alert("Copied to clipboard: " + tasks[i]);
        });
      });

      // Delete Button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.cursor = "pointer";

      deleteButton.addEventListener("click", function () {
        tasks.splice(i, 1); // Remove task
        saveTasks(); // Update localStorage
        displayTasks();
      });

      // Append elements in the new order
      taskContainer.appendChild(p);
      taskContainer.appendChild(copyButton);
      taskContainer.appendChild(deleteButton);
      outputContainer.appendChild(taskContainer);
    }
  }

  displayTasks(); // Load tasks when the page loads
});
