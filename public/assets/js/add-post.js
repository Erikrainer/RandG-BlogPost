// Add event listener to the form with class 'newPost'
document.querySelector(".newPost").addEventListener('submit', newFormHandler);

// Function to handle form submission
async function newFormHandler(event) {
    event.preventDefault();

    // Get form input values
    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;

    try {
        // Send POST request to create post
        const response = await fetch ("/dashboard/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                text,
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
    } catch (error) {
        console.error("Error adding post:", error);
        alert("Failed to add post");
    }
}
