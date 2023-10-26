// JavaScript to show and hide the pop-up
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");
    const sendMessageButton = document.querySelector(".btn");

    // Show the pop-up
    sendMessageButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Close the pop-up when the close button is clicked
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close the pop-up when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Close the pop-up when the "Escape" key is pressed
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.style.display === "block") {
            popup.style.display = "none";
        }
    });
});
