document.addEventListener('DOMContentLoaded', () => {
  const editButtons = document.querySelectorAll('.updateButton');
  
  editButtons.forEach(button => {
      button.addEventListener('click', () => {
          const postId = button.dataset.postId;
          window.location.href = `/blogpost/edit/${postId}`;
      });
  });
});
