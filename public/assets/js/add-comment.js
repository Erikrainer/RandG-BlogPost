// Add event listener to the form with class 'add-comment-form'
document.querySelector(".add-comment-form").addEventListener('submit', addCommentHandler);

// Function to handle form submission for adding a new comment
async function addCommentHandler(event) {
    event.preventDefault();

    // Get the comment text from the form
    const commentText = document.querySelector('.add-comment-form textarea').value;
    const blogpostId = event.target.dataset.blogpostId;


    try {
        // Send POST request to create comment
        const response = await fetch("/comments/create", {
            method: "POST",
            body: JSON.stringify({
                comment_text: commentText,
                blogpostId: blogpostId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // If response is successful, reload the page to see the new comment
            document.location.replace("/");
        } else {
            // If response is not successful, display error message
            alert("Failed to add comment");
        }
    } catch (error) {
        // Catch any errors that occur during the fetch request
        console.error('Error adding comment:', error);
        alert("Failed to add comment. Please try again later.");
    }
}
