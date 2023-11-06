const blogsData = [
    {
        id: 1,
        admin: "BY: ADMIN 24 APRIL 2021",
        title: "Maecenas Laoreet Massa",
        description: "Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor incidio ut labore et dolore magna aliqua.",
        image: "https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-3-310x220.jpg"
    },
    {
        id: 2,
        admin: "BY: ADMIN 24 APRIL 2021",
        title: "Aenean Vulputate Lorem",
        description: "Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor incidio ut labore et dolore magna aliqua.",
        image: "https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-1-310x220.jpg"
    },
    {
        id: 3,
        admin: "BY: ADMIN 24 APRIL 2021",
        title: "There Many Variations",
        description: "Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor incidio ut labore et dolore magna aliqua.",
        image: "https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg"
    },
];

const blogMain = document.querySelector("#blogs-main");

blogsData.forEach(blog => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = 
    `
        <a href="#">${blog.admin}</a>
        <h5>${blog.title}</h5>
        <p>${blog.description}</p>
        <img src="${blog.image}" alt="">
    `
    blogMain.append(blogCard)
})