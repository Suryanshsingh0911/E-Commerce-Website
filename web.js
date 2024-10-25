document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const name = form.name.value;
        const email = form.email.value;
        const feedback = form.feedback.value;

        // Here you could handle the feedback submission, e.g., sending data to a server

        // Display a response message
        responseMessage.textContent = `Thank you, ${name}! Your feedback has been submitted.`;
        
        // Optionally, reset the form
        form.reset();
    });
});
