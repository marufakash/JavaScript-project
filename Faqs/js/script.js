const faqsData = [
    {
        id: 1,
        title: "What is backend vs frontend?",
        des: "All websites require front-end and back-end development. Front-end development focuses on the visual aspects of a website – the part that users see and interact with. Back-end development comprises a site's structure, system, data, and logic."
    },
    {
        id: 2,
        title: "What is Data Structure & Algorithm?",
        des: "A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs."
    },
    {
        id: 3,
        title: "How soon can I land a real-world job?",
        des: "It's not uncommon for Codecademy learners to land web development jobs within 6 months. You can find how and read more in-depth success stories in the community forums."
    },
    {
        id: 4,
        title: "What if I don't have a Computer Science degree?",
        des: "Having a degree related to Computer Science or STEM (Science, Technology, Engineering, Mathematics) helps, but it is not an absolute requirement in most Computer Science fields. It is no longer rare that developers have an unrelated degree or no degree at all, and the number of such developers continues to grow."
    }
]

// finding elements
const faqs = document.querySelector(".faqs");

const loadData = () => {
    faqsData.map((data) => {
        const faqElement = document.createElement("div");
        faqElement.classList.add("faq");
        faqElement.innerHTML = `
            <div>
                <h2>${data.id}. ${data.title}</h2>
                <button id="toggle-btn">+</button>
            </div>
            <p id="para">${data.des}</p>
        `;
        faqs.appendChild(faqElement);

        document.getElementById("toggle-btn").addEventListener("click", () => {
            document.getElementById("para").style.display = "block";
        })
        
        document.getElementById("toggle-btn").addEventListener("dblclick", () => {
            document.getElementById("para").style.display = "none";
        })
    });
}

loadData();

