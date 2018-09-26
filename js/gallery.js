const gallery = document.getElementById("gallery");
const allTargets = gallery.getElementsByClassName("member__face");
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
      currentFocus = target;
    }
  }
})
