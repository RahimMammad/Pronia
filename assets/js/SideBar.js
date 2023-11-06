const sideBar = document.querySelector("#sidebar");
const barsBtn = document.querySelector("#bars");

let visible = false

barsBtn.addEventListener("click", () => {
    if(visible === false) {
        sideBar.style.left = "0px"
        visible = true
    } else {
        sideBar.style.left = "-350px";
        visible = false
    }
})
