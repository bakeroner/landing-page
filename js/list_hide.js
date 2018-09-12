const tree = document.getElementById("ulTree");
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