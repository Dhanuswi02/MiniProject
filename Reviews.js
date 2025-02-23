document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;

        if (name && reviewText) {
            const reviewList = document.getElementById('review-list');

            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');

            const nameElement = document.createElement('div');
            nameElement.classList.add('name');
            nameElement.innerText = name;

            const textElement = document.createElement('div');
            textElement.classList.add('text');
            textElement.innerText = reviewText;

            reviewDiv.appendChild(nameElement);
            reviewDiv.appendChild(textElement);
            reviewList.appendChild(reviewDiv);

            // Clear the form fields after submission
            document.getElementById('name').value = '';
            document.getElementById('review').value = '';

            alert('Thank you for your review!');
        }
    });
});
