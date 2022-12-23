// dummy data
const dummyData = [
    {
        title: "Card-1",
        des: "This is card 1"
    },
    {
        title: "Card-2",
        des: "This is card 2"
    },
    {
        title: "Card-3",
        des: "This is card 3"
    },
    {
        title: "Card-4",
        des: "This is card 4"
    },
    {
        title: "Card-5",
        des: "This is card 5"
    },
    {
        title: "Card-6",
        des: "This is card 6"
    },
    {
        title: "Card-7",
        des: "This is card 7"
    },
    {
        title: "Card-8",
        des: "This is card 8"
    }
]

// finding elements
const posts = document.querySelector(".posts");

const loadData = () => {
    dummyData.map((data) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3 class="post-title">${data.title}</h3>
            <p class="post-des">${data.des}</p>
        `;
        posts.appendChild(postElement);
    })
}

loadData();