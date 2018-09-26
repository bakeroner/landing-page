const gallery = document.getElementById("gallery");
const allTargets = gallery.getElementsByClassName("member__face");
const about = document.getElementById("about");
const allLabels = document.getElementsByClassName("member__info");
const focus = document.querySelector(".member__face--OnFocus");
let currentFocus = focus;
gallery.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("member__face--NoFocus") == true) {
    if (target != currentFocus) {
      target.classList.remove("member__face--NoFocus");
      target.classList.add("member__face--OnFocus");
      currentFocus.classList.remove("member__face--OnFocus");
      currentFocus.classList.add("member__face--NoFocus");
     /* currentFocus = target;*/
      for (let i = 0; i<allTargets.length; i++) {
        if (target == allTargets[i]) {
          allLabels[i].classList.remove("hideElement");
        }
        if (currentFocus == allTargets[i]) {
          allLabels[i].classList.add("hideElement");
        }
      }
      currentFocus = target;
    }
  }
})
