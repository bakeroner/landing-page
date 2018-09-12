const tree = document.getElementById("ulTree");
const content = tree.getElementsByTagName("li");
for (let i = 0; i<content.length; i++) {
  Array.from(content[i].children).forEach((nod) => {
      if (nod.tagName == "DIV") {
        //toHide(nod);
      nod.classList.toggle("hideElement");
    }
    })
  }
  tree.addEventListener("click", (event) => {
    let target = event.target;
    let tChildren = target.children;
    if (target.tagName == "LI") {
    Array.from(target.childNodes).forEach((elem) => {
      if (elem.tagName == "DIV") {
      toHide(elem);
    }
    })
  }
  })
  let toHide = (elementHide) => {
    elementHide.classList.toggle("hideElement");
  };