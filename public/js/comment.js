const postButton = document.querySelector('#post-comment');

postComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog/:id');
      } else {
        alert('Failed to post comment.');
      }
    }
  };

  postButton.addEventListener("click", postComment())

  