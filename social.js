document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const feed = document.getElementById('feed');

    postButton.addEventListener('click', function() {
        const content = postContent.value.trim();
        if (content) {
            const postElement = createPostElement(content);
            feed.prepend(postElement);
            postContent.value = '';
        }
    });

    function createPostElement(content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>Username</h3>
            <p>${content}</p>
            <div class="actions">
                <button class="like-button">Like</button>
                <span class="like-count">0 likes</span>
            </div>
        `;

        const likeButton = postDiv.querySelector('.like-button');
        const likeCount = postDiv.querySelector('.like-count');

        likeButton.addEventListener('click', function() {
            const count = parseInt(likeCount.textContent.split(' ')[0]) + 1;
            likeCount.textContent = `${count} likes`;
        });

        return postDiv;
    }
});
