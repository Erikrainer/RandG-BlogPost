document.addEventListener('DOMContentLoaded', () => {
  const editButtons = document.querySelectorAll('.updateButton');
  
  editButtons.forEach(button => {
      button.addEventListener('click', () => {
          const postId = button.dataset.postId;
          window.location.href = `/blogpost/edit/${postId}`;
      });
  });
});

async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#text').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/blogpost/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace(`/blogpost`);
  } else {
    alert('Failed to edit post');
}
}
document
  .querySelector('.edit-post-container')
  .addEventListener('submit', editFormHandler);