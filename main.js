let deviceWidth = window.innerWidth;
console.log(deviceWidth);

let navOne = document.querySelector("#nav-1");
let navTwo = document.querySelector("#nav-2");
let navThree = document.querySelector("#nav-3");

window.onload = getNewDimension();
window.onresize = getNewDimension;

function getNewDimension() {
  deviceWidth = window.innerWidth;
  if (deviceWidth < 1126) {
    navOne.textContent = navOne.textContent.replace("Navigation ", "");
    navTwo.textContent = navTwo.textContent.replace("Navigation ", "");
    navThree.textContent = navThree.textContent.replace("Navigation ", "");
  } else {
    navOne.textContent = "Navigation Link One";
    navTwo.textContent = "Navigation Link Two";
    navThree.textContent = "Navigation Link Three";
  }
}
