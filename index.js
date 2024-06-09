const apikey = '7652442491e54669af7ac8e92c6dbfd9';

const blogContainer = document.getElementById('bolg-container');

async function fetchRandomNews() {
    try {
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apikey}&pageSize=10`;
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.log("Error fetching random news ", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h2");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);

        blogContainer.appendChild(blogCard);
    });
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.log("Error fetching random news ", error);
    }
})();
