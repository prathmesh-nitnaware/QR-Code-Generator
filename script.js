let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qr-img");
let input = document.getElementById("qr-text")
let button = document.getElementById("btn");
let errorMsg = document.getElementById("error-msg"); 

function generateQr(event){
    if (input.value.trim() === "") {
        errorMsg.textContent = "Please enter something!"; 
        return;
    }
    errorMsg.textContent = ""; 
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
}

button.addEventListener("click",(event)=>{
    generateQr(event);
})

