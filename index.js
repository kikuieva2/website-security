const emailInput = document.getElementById("email");
const shareBtn = document.querySelector(".submit__btn");
const errorText = document.getElementById("error");

// nevar nosūtīt , ja nav uzspiests share button

shareBtn.addEventListener("click",function(){
if(emailInput.value === ""){
    errorText.style.display = "block";
}else{
    errorText.style.display = "none";
}
});