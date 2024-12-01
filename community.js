document.getElementById('post-btn').addEventListener('click', function () {
    const content = document.getElementById('post-content').value.trim();
    
    if (content === '') {
      alert('Please write something!');
      return;
    }
  
    const post = document.createElement('div');
    post.classList.add('post');
  
    post.innerHTML = `
  <p>${content}</p>
  <div class="post-actions">
    <span class="likes">0 Likes</span>
    <button class="like-btn">
      <i class="fa fa-thumbs-up"></i> Like
    </button>
    <span class="dislikes">0 Dislikes</span>
    <button class="dislike-btn">
      <i class="fa fa-thumbs-down"></i> Dislike
    </button>
    <button class="reply-btn">Reply</button>
  </div>
  <div class="replies"></div>
  <div class="reply-box" style="display: none;">
    <textarea class="reply-content" placeholder="Write a reply..."></textarea>
    <button class="submit-reply-btn">Submit</button>
  </div>
`;
  
    document.getElementById('posts').prepend(post);
  
    // Reset input
    document.getElementById('post-content').value = '';
  
    // Like button functionality
    post.querySelector('.like-btn').addEventListener('click', function () {
      const likes = post.querySelector('.likes');
      const currentLikes = parseInt(likes.textContent);
      likes.textContent = `${currentLikes + 1} Likes`;
    });
  
    // Dislike button functionality
    post.querySelector('.dislike-btn').addEventListener('click', function () {
      const dislikes = post.querySelector('.dislikes');
      const currentDislikes = parseInt(dislikes.textContent);
      dislikes.textContent = `${currentDislikes + 1} Dislikes`;
    });
  
    // Reply functionality
    const replyBtn = post.querySelector('.reply-btn');
    const replyBox = post.querySelector('.reply-box');
    const repliesContainer = post.querySelector('.replies');
  
    replyBtn.addEventListener('click', function () {
      replyBox.style.display = replyBox.style.display === 'none' ? 'block' : 'none';
    });
  
    post.querySelector('.submit-reply-btn').addEventListener('click', function () {
      const replyContent = replyBox.querySelector('.reply-content').value.trim();
      if (replyContent === '') {
        alert('Please write a reply!');
        return;
      }
  
      const reply = document.createElement('div');
      reply.classList.add('reply');
      reply.textContent = replyContent;
      repliesContainer.appendChild(reply);
      replyBox.querySelector('.reply-content').value = ''; // Reset reply input
      replyBox.style.display = 'none'; // Hide reply box after submission
    });
  });
  