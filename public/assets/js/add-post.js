// Add event listener to the form with class 'newPost'
document.querySelector(".newPost").addEventListener('submit', newFormHandler);

// Function to handle form submission
async function newFormHandler(event) {
    event.preventDefault();

    // Get form input values
    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;
    const usernameElement = document.getElementById('usernameElement');
    const user_username = usernameElement.dataset.username;

        // Send POST request to create post
        const response = await fetch ("/blogpost/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                text,
                user_username,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok) {
            // If response is successful, redirect to home page
            document.location.replace("/");
        } else {
            // If response is not successful, display error message
            alert("Failed to add post");
        }
}
document
document.querySelector('.newPost').addEventListener('submit', newFormHandler);
