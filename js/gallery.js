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
  //const img_container = container.getElementsByClass("easy_div");
const img_coll = container.getElementsByClassName("easy_div");
for (let i = 0; i<img_coll.length; i++) {
  Array.from(img_coll[i].children).forEach((face) => {
      if (face.tagName == "IMG") {
        //toHide(nod);
      face.classList.toggle("smokeElement");
    }
    if (face.tagName == "DIV") {
        face.classList.toggle("hideElement");
    }
     if (face.tagName == "P") {
        face.classList.toggle("hideElement");
    }
    })
  }
    container.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName == "IMG") {
        target.classList.toggle("clearElement");
        console.log(target.nextSibling);
        /*target.nextSibling.classList.toggle("hideElement");*/
    }
    })