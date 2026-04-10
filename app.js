const promptList = document.getElementById("promptList");

fetch("prompts.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = 
        <><h3>${p.title}</h3><p><strong>${p["catégorie"]}</strong></p><p>${p.prompt}</p></>
      ;
      promptList.appendChild(div);
    });
  });