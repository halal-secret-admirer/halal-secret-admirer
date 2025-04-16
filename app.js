function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Generate stars
function createStars(layer, count) {
    const container = document.querySelector(`.${layer}`);
    for(let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
    }
}

// Initialize stars after page loads
document.addEventListener('DOMContentLoaded', function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('blog-posts');
            posts.forEach(post => {
                const postEl = document.createElement('article');
                postEl.className = 'post-card';
                
                // Add celestial class conditionally
                if (post.title.toLowerCase().includes('moon') || post.title.toLowerCase().includes('celestial')) {
                    postEl.classList.add('celestial');
                }
                if (post.celestial) {
                    postEl.classList.add('celestial');
                }

                postEl.innerHTML = `
                    <h2>${post.title}</h2>
                    <div class="post-date">${(post.date)}</div>
                    <div class="post-content">${post.content}</div>
                `;
                container.appendChild(postEl);
            });
        });
});