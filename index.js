const emailInput = document.getElementById("email");
const shareBtn = document.querySelector(".submit__btn");
const errorText = document.getElementById("error");
const burger = document.querySelector(".burger__container");
const items = document.querySelector(".header__items");



shareBtn.addEventListener("click",function(){
if(emailInput.value === ""){
    errorText.style.display = "block";
}else{
    errorText.style.display = "none";
}
});

burger.addEventListener("click",function(){
    items.style.display = "block";
});