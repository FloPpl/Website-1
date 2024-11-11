// color-change.js

// Add click event to each color box
document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', function() {
        // Get the background color of the clicked box
        const color = this.style.backgroundColor;
        // Set the background color of the body
        document.body.style.backgroundColor = color;
    });
});
