const posts = {
    1: {
        title: "Day One at University",
        date: "January 7, 2026",
        image: "images/blog1.jpg",
        content: "Today was my first day at university. I learned the basics of HTML, how to structure a webpage, and how to create headings, paragraphs, and images. It was exciting to see my first page appear on the browser. I also started learning CSS to style my page. I am really excited to continue this learning journey and document it in my daily blog."
    },
    2: {
        title: "Learning CSS",
        date: "January 8, 2026",
        image: "images/blog2.jpg",
        content: "Today I focused on CSS. I learned about colors, fonts, spacing, and layout. I also experimented with hover effects and simple animations to make the blog look more attractive. It was really fun to see how a few lines of CSS can completely change the look of a webpage. I plan to continue improving my blog with new designs and posts."
    }
};

const blogContainer = document.getElementById("blogContainer");
const postView = document.getElementById("postView");
const postImage = document.getElementById("postImage");
const postTitle = document.getElementById("postTitle");
const postDate = document.getElementById("postDate");
const postContent = document.getElementById("postContent");
const backLink = document.getElementById("backLink");

blogContainer.addEventListener("click", (e) => {
    let card = e.target.closest(".blog-card");
    if (!card) return;

    let postId = card.dataset.post;
    let post = posts[postId];

    postImage.src = post.image;
    postTitle.textContent = post.title;
    postDate.textContent = post.date;
    postContent.textContent = post.content;

    blogContainer.style.display = "none";
    postView.style.display = "block";
});

backLink.addEventListener("click", () => {
    postView.style.display = "none";
    blogContainer.style.display = "flex";
});