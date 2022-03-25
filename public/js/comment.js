const postButton = document.querySelector('#post-comment');

console.log(postButton);

postComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('.comment').value.trim();
    const blog_id = window.location.pathname.slice(1).split("/")[1];
    console.log({comment}, window.location.pathname);

  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content:comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blog/${blog_id}`);
      } else {
        alert('Failed to post comment.');
      }
    }
  };

  postButton.addEventListener("click", postComment)

  