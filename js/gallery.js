/*var slider = tns({
    container: ".gallery123",
    mode: "gallery",
    items: 3,
    axis: "horizontal",
    speed: 400,
    slideBy: 1,
    controls: true,
    loop: true,
    nav: false,
  });*/
const container = document.getElementById("gallery");
const img_coll = container.getElementsByClassName("easy_div");
//toHideAll();
for (let i = 0; i<img_coll.length; i++) {
  Array.from(img_coll[i].children).forEach((face) => {
      if (face.tagName == "IMG") {
      face.classList.add("smokeElement");
    }
    else {
        face.classList.add("hideElement");
    }
    })
  }

    container.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName == "IMG") {
        toHideAll();
        //console.log(target.parentNode.children);
        Array.from(target.parentNode.children).forEach((dom_element) => {
            if (dom_element.tagName == "IMG") {
                toHighlight(dom_element);
            }
            else {
                showElemFunc(dom_element);
            }
        })
    }
    })
    let toHideAll = () => {
        for (let i = 0; i<img_coll.length; i++) {
  Array.from(img_coll[i].children).forEach((face1) => {
      if (face1.tagName == "IMG") {
        smokeElemFunc(face1);
    }
    else {
        hideElemFunc(face1);
    }
    })
  }
    }
    let hideElemFunc = (elementHide) => {
    elementHide.classList.add("hideElement");
  };
    let showElemFunc = (elementHide) => {
    elementHide.classList.toggle("hideElement");
  };
    let toHighlight = (elementShow) => {
    elementShow.classList.toggle("clearElement");
  };
    let smokeElemFunc = (elementShow) => {
    elementShow.classList.add("smokeElement");
  };