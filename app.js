const promptList = document.getElementById("promptList");
const form = document.getElementById("form");

fetch("prompts.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(addPrompt);
  });

function addPrompt(p) {
  const div = document.createElement("div");

  promptList.appendChild(div);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const newPrompt = {
    title: document.getElementById("title").value,
    category: document.getElementById("category").value,
    prompt: document.getElementById("prompt").value
  };

  addPrompt(newPrompt);
  form.reset();
