window.cpn = [];

function CreateComponent(dict) {
  let type = dict["type"]
  if (type == "text-block") {
    let text = dict["text"];
    let onclick = dict["onclick"];
    let name = dict["name"]
    let e = document.createElement('p')
    e.innerText = text;
    e.addEventListener('click', onclick)
    window.cpn.push({recognize: `[[${name}]]`, assocElement:e})
  }
}

function LoadCPN() {
  window.cpn.forEach((c)=>{
    document.documentElement.innerHTML = document.documentElement.innerHTML.replace(c.recognize, c.assocElement.outerHTML)
  })
}
