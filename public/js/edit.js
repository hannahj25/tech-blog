const editBtns = document.querySelectorAll('.edit-btn');

console.log(editBtns);
editBtns.forEach((btn) => {
    btn.addEventListener('click', function(event){
        event.preventDefault();

        const blogId = (event.target.getAttribute('data-id'));
        location.href = '/edit/' + blogId;

    })
})

const editFormHandler = async (event) => {
    event.preventDefault();
    const formEl = event.target;
  
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-cont').value.trim();
  
    if (title && content) {
      const response = await fetch(formEl.getAttribute('action'), {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit blog post.');
      }
    }
  };
  


document
  .querySelector('.edit-blog-form')
  ?.addEventListener('submit', editFormHandler);