document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.getElementById("dropdownContent");
    const categoryButton = document.getElementById("categoryButton");
    
    // Handle Dropdown Selection
    dropdownContent.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const selectedValue = event.target.getAttribute("data-value");
            categoryButton.textContent = selectedValue;
            dropdownContent.style.display = "none";
        }
    });

    // Close dropdown when clicked outside
    document.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContent.style.display = "none";
        }
    });

    // Toggle dropdown display
    categoryButton.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
});


