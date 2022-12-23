// finding elements
let quoteText = document.getElementById("para");
let authorName = document.getElementById("author");
let button = document.getElementById("generate-btn");

const quotes = [
    {
        author: "~ Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        author: "~ Zig Ziglar",
        quote: "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you."
    },
    {
        author: "~ Barack Obama",
        quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."
    },
    {
        author: "~ Dr. Seuss",
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
    },
    {
        author: "~ Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."
    },
    {
        author: "~ Mother Teresa",
        quote: "In this life we cannot do great things. We can only do small things with great love."
    },
    {
        author: "~ Thomas A. Edison",
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."
    },
    {
        author: "~ Dr. Seuss",
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
    },
    {
        author: "~ Ralph Waldo Emerson",
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail"
    },
    {
        author: "~ Eleanor Roosevelt",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
        author: "~ Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."
    },
]

button.addEventListener("click", () => {
    let index = Math.floor(Math.random() * quotes.length);
    // quoteText.textContent = quotes[index].quote;
    quoteText.innerHTML = `<i class="fa-solid fa-quote-left"></i>${quotes[index].quote}<i class="fa-solid fa-quote-right"></i>`;
    authorName.textContent = quotes[index].author;
})