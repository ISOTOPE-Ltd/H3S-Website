function toggleText(button) {
    // Get the long-text element associated with the button
    var longText = button.previousElementSibling; // Assumes the long-text paragraph is right before the button
    
    // Toggle the display of the long-text paragraph
    if (longText.style.display === "none" || longText.style.display === "") {
      longText.style.display = "block"; // Show long text
      button.textContent = "Lire moins"; // Change button text to "Lire moins"
    } else {
      longText.style.display = "none"; // Hide long text
      button.textContent = "Lire la suite"; // Change button text to "Lire la suite"
    }
  }
  
  // Ensure all long-text elements are initially hidden when the page loads
  window.onload = function() {
    var longTextElements = document.querySelectorAll('.long-text');
    longTextElements.forEach(function(longText) {
      longText.style.display = "none"; // Hide long text initially
    });
  };
  

