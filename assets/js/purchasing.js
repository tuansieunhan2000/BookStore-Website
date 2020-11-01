
//number of purchasing text
let numberPurchasing = document.getElementById("numberPurchasing");
let NumberPurchasingBtn = document.getElementsByClassName("cart-left-btn");

NumberPurchasingBtn[0].addEventListener("click", () => {
    let numberTemp = numberPurchasing.textContent;
    numberTemp--;
    if( numberTemp < 1 )
        numberTemp = 1;
    numberPurchasing.innerHTML = (numberTemp);
});
NumberPurchasingBtn[1].addEventListener("click", () => {
    let numberTemp = numberPurchasing.textContent;
    numberTemp++;
    numberPurchasing.innerHTML = (numberTemp);
});

// choose option in book format
let chooseOption = document.getElementsByClassName("main-purchasing-right-opt");
for (let i = 0; i < chooseOption.length; i++) {
    (function () {
        chooseOption[i].addEventListener("click", () =>{
            for(let k = 0; k < chooseOption.length ; k++){
                chooseOption[k].style.border = "none";
                chooseOption[k].style.color = "black";
            }
            chooseOption[i].style.borderBottom = 2  + "px "+"solid "+"black";
            chooseOption[i].style.color = "red";
        },false);
    }()); // immediate invocation
}

// choose change to scroll
let chooseCTS = document.getElementsByClassName("change-to-scroll-element");

for (let i = 0; i < chooseCTS.length; i++) {
    (function () {
        chooseCTS[i].addEventListener("click", () =>{
            for(let k = 0; k < chooseCTS.length ; k++){
                chooseCTS[k].style.border = "none";
            }
            chooseCTS[i].style.borderBottom = 2  + "px "+"solid "+"black";

        },false);
    }()); // immediate invocation
}
//scroll to element which be chosen
// JSForDescribe[0].addEventListener("click", () => {
//     let pos = $(chooseCTS[0]).offset().top;     //bug bug bug bug
//     document.documentElement.scrollTop = pos;
// });
let JSForDescribe = document.getElementsByClassName("js-for-describe");
let JSForProductDetail = document.getElementsByClassName("js-for-product-detail");
let CTSProductDetail = document.getElementsByClassName("cts-product-detail");
let JSForVideos = document.getElementsByClassName("js-for-videos");
let CTSVideos = document.getElementsByClassName("cts-videos");
let JSForViews = document.getElementsByClassName("js-for-views");
let CTSViews = document.getElementsByClassName("cts-views");
for (let i = 0; i < JSForDescribe.length; i++) {
    (function () {
        JSForDescribe[i].addEventListener("click", () =>{
            let pos = $(chooseCTS[0]).offset().top;     //bug bug bug bug
            document.documentElement.scrollTop = pos;
            
        },false);
    }()); // immediate invocation
}
for (let i = 0; i < JSForProductDetail.length; i++) {
    (function () {
        JSForProductDetail[i].addEventListener("click", () =>{
            let pos = $(CTSProductDetail[0]).offset().top;     //bug bug bug bug]
            console.log(pos);
            document.documentElement.scrollTop = pos;
            
        },false);
    }()); // immediate invocation
}
for (let i = 0; i < JSForVideos.length; i++) {
    (function () {
        JSForVideos[i].addEventListener("click", () =>{
            let pos = $(CTSVideos[0]).offset().top;     //bug bug bug bug]
            console.log(pos);
            document.documentElement.scrollTop = pos;
            
        },false);
    }()); // immediate invocation
}
for (let i = 0; i < JSForViews.length; i++) {
    (function () {
        JSForViews[i].addEventListener("click", () =>{
            let pos = $(CTSViews[0]).offset().top;     //bug bug bug bug]
            console.log(pos);
            document.documentElement.scrollTop = pos;
            
        },false);
    }()); // immediate invocation
}