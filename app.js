const prompts = [
  {
    title: "Test",
    category: "Demo",
    prompt: "Exemple de prompt"
  }
];

const container = document.getElementById("prompts");

prompts.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = <><h3>${p.title}</h3><p>${p.prompt}</p></>;
  container.appendChild(div);
});