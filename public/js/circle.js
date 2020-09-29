import $ from 'jquery';

export const sendCircle  = () => {
    const button = $("#main-svg");
const flex = $(".bike__flex");
const use = $("#use");

const main = $(".bike__main");

button.on("click", () => {
  button.toggleClass("u-fifty");
  if (use.attr("xlink:href") === "/icons/symbol-defs.svg#icon-circle-left") {
    use.attr("xlink:href", "/icons/symbol-defs.svg#icon-circle-right");
  } else {
    use.attr("xlink:href", "/icons/symbol-defs.svg#icon-circle-left");
  }

  flex.toggleClass("u-flex-display");
  main.toggleClass("u-flex-item");
});

const navbar = $(".right-bar");
const content = $(".right-bar__content");


}
