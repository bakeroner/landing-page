import {tns} from './../../node_modules/tiny-slider/src/tiny-slider';
var slider = tns({
    container: ".slider-block",
    mode: "carousel",
    items: 2,
    axis: "vertical",
    speed: 400,
    slideBy: 1,
    controls: true,
    loop: true,
    nav: false,
    prevButton: "#butTop",
    nextButton: "#butBot",
  });
