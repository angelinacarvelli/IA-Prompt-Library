const promptList = document.getElementById("promptList");
const form = document.getElementById("form");

fetch("prompts.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(addPrompt);
  });

function addPrompt(p) {
  const div = document.createElement("div");
  div.classList.add("prompt");

  div.innerHTML = 
    <><h3>${p.title}</h3><p><strong>${p.category || p["catégorie"]}</strong></p><p>${p.prompt}</p></>
  ;

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
});