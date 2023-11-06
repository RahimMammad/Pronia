const clientsData = [
    {
        id: 1, 
        image: "https://htmldemo.net/pronia/pronia/assets/images/testimonial/user/1.png",
        name: "PHOENIX BAKER",
        job: "Client",
        description: "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna"
    }, 
    {
        id: 2, 
        image: "https://htmldemo.net/pronia/pronia/assets/images/testimonial/user/2.png",
        name: "PHOENIX BAKER",
        job: "Client",
        description: "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna"
    }, 
    {
        id: 3, 
        image: "https://htmldemo.net/pronia/pronia/assets/images/testimonial/user/3.png",
        name: "PHOENIX BAKER",
        job: "Client",
        description: "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna"
    }
]

const clientsMain = document.querySelector("#clients-main");

clientsData.forEach(client => {
    const newClientCard = document.createElement("div");
    newClientCard.classList.add("client-card");
    newClientCard.innerHTML = `
        <div id="quotation">
            <img src="./assets/imgs/quotation.webp" alt="">
        </div>
        <img src="${client.image}" alt="">
        <div class="client-name">
            <h4>${client.name}</h4>
            <span>${client.job}</span>
        </div>
        <i><p>${client.description}</p></i>
    `
    clientsMain.append(newClientCard);
})