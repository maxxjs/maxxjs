window.cpn = [];

function CreateComponent(dict) {
  let type = dict["type"]
  if (type == "text-block") {
    let text = dict["text"];
    let name = dict["name"]
    let e = document.createElement('p')
    e.innerText = text;
    Object.keys(dict).forEach((k)=>{
      if (k.startsWith("a__")) {
        e.setAttribute(k.replace("a__", dict[k])
      }
      if (k.startsWith("on")) {
        e.addEventListener(k.replace("on",""), dict[k])
      }
    })
    window.cpn.push({recognize: `[[${name}]]`, assocElement:e})
  }
}

function LoadCPN() {
  window.cpn.forEach((c)=>{
    elems = document.body.getElementsByTagName("*");
    [].forEach.call(elems, ((e)=>{
      if (e.innerText == c.recognize) {
        e.innerHTML = "";
        e.appendChild(c.assocElement)
      }
    }))
  })
}


