let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qr-img");
let input = document.getElementById("qr-text");
let button = document.getElementById("btn");
let errorMsg = document.getElementById("error-msg");
let downloadBtn = document.getElementById("download-btn");

function generateQr(event) {
    if (input.value.trim() === "") {
        errorMsg.textContent = "Please enter something!";
        downloadBtn.style.display = "none";
        qrImage.style.display = "none"; 
        qrImage.src = "";
        return;
    }

    errorMsg.textContent = "";

    let qrSmallUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
    let qrHdUrl = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + encodeURIComponent(input.value);

    qrImage.src = qrSmallUrl;

    qrImage.onload = function () {
        qrImage.style.display = "block"; 
        downloadBtn.style.display = "inline-block";
        downloadBtn.setAttribute("href", qrHdUrl);
        downloadBtn.setAttribute("download", "qr-code.png"); 
    }
}

button.addEventListener("click", generateQr);
