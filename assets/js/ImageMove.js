const moveImage = document.getElementById("header-img");
const headerMain = document.getElementById("headermain");

headerMain.addEventListener("mousemove", (e) => {
    let upDirection = Math.floor(e.clientX/100);
    let leftDirection = Math.floor(e.clientY/100);
    moveImage.style.transform = `translate(${upDirection}px, ${leftDirection}px)`
});