const gallery = document.getElementById("gallery");
const allTargets = gallery.getElementsByClassName("member__face");
const focus = document.querySelector(".member__face--on-focus");
let currentFocus = focus;
gallery.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("member__face--no-focus") == true) {
    console.log(target);
    if (target != currentFocus) {
      target.classList.remove("member__face--no-focus");
      target.classList.add("member__face--on-focus");
      currentFocus.classList.remove("member__face--on-focus");
      currentFocus.classList.add("member__face--no-focus");
      currentFocus = target;
      console.log(currentFocus);
    }
  }
})
