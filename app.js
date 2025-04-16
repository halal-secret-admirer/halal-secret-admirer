document.addEventListener('DOMContentLoaded', function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('blog-posts');
            posts.forEach(post => {
                const postEl = document.createElement('article');
                postEl.className = 'post-card';
                postEl.innerHTML = `
                    <h2>${post.title}</h2>
                    <div class="post-date">${formatDate(post.date)}</div>
                    <div class="post-content">${post.content}</div>
                `;
                container.appendChild(postEl);
            });
        });
});

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}