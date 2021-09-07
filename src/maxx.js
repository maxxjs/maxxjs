window.cpn = [];

function CreateComponent(dict) {
  let text = dict["text"];
  let onclick = dict["onclick"];
  let name = dict["name"]
  let e = document.createElement('p')
  e.innerText = text;
  e.addEventListener('click', onclick)
  window.cpn.push({recognize: `((${name}))`, assocElement:e})
}
  
