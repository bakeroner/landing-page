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
for (let i = 0; i<img_coll.length; i++) {
  Array.from(img_coll[i].children).forEach((face) => {
      if (face.tagName == "IMG") {
      face.classList.toggle("smokeElement");
    }
    else {
        face.classList.toggle("hideElement");
    }
    })
  }

    container.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName == "IMG") {
        console.log(target.parentNode.children);
        Array.from(target.parentNode.children).forEach((dom_element) => {
            if (dom_element.tagName == "IMG") {
                dom_element.classList.toggle("clearElement");
            }
            else {
                dom_element.classList.toggle("hideElement");
            }
        })
    }
    })