let showCoupon = document.getElementById("show-coupon");
let couponCode = document.getElementById("coupon-code");
showCoupon.addEventListener("click", () =>{
    console.log("ss");
   if( couponCode.style.display === "flex" )
        couponCode.style.display = "none"
   else
        couponCode.style.display = "flex"
});