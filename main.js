let deviceWidth = window.innerWidth;
// console.log(deviceWidth);

let navOne = document.querySelector("#nav-1");
let navTwo = document.querySelector("#nav-2");
let navThree = document.querySelector("#nav-3");

window.onload = getNewDimension;
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

function getMe(ev) {
  let isLiked = false;
  let likeReview = document.querySelector(".card_review");
  let likeCount = Number.parseFloat(
    likeReview.textContent.split(" ")[0].replaceAll(",", "")
  );
  let clsId = ev.target.id[ev.target.id.length - 1] - 1;
  let element = document.getElementById(ev.target.id);

  for (let i = 0; i < 5; i++) {
    let prevStar = document.getElementById("star-" + (i + 1));
    if (prevStar.classList.contains("star_fill")) {
      isLiked = true;
    }
  }

  if (element.classList.contains("star_fill")) {
  } else {
    for (let i = 0; i <= clsId; i++) {
      let prevStar = document.getElementById("star-" + (i + 1));
      prevStar.src = "images/star_fill.svg";
      prevStar.classList.add("star_fill");
      console.log("fill", prevStar);
    }
  }

  for (let i = clsId + 1; i <= 4; i++) {
    let prevStar = document.getElementById("star-" + (i + 1));
    prevStar.src = "images/star_empty.svg";
    prevStar.classList.remove("star_fill");
    console.log("empty", prevStar);
  }

  if (!isLiked) {
    likeCount++;
    likeReview.textContent = likeCount.toLocaleString("en-US") + " Reviews";
  }
}
