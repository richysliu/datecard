function redirectToYes() {
    window.location.href = "yes-page.html"; // Replace with the actual URL of your 'Yes' page
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const newPositionX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const newPositionY = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${newPositionX}px`;
    noButton.style.top = `${newPositionY}px`;
}
