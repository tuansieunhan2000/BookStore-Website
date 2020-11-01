let minusIcon = document.getElementsByClassName("minus-icon");
let plusIcon = document.getElementsByClassName("plus-icon");
let subTotalContainer = document.getElementsByClassName("sub-total-container");

for (let i = 0; i < subTotalContainer.length; i++) {
  (function () {
    minusIcon[i].addEventListener(
      "click",
      () => {
        minusIcon[i].style.display = "none";
        subTotalContainer[i].style.display = "none";
        plusIcon[i].style.display = "block";
      },
      false
    );
  })(); // immediate invocation
}

for (let i = 0; i < subTotalContainer.length; i++) {
  (function () {
    plusIcon[i].addEventListener(
      "click",
      () => {
        plusIcon[i].style.display = "none";
        subTotalContainer[i].style.display = "block";
        minusIcon[i].style.display = "block";
      },
      false
    );
  })(); // immediate invocation
}
