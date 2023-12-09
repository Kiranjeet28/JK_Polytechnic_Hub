document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const stylesheet = document.getElementById("stylesheet");
    
    modeToggle.addEventListener("change", function() {
        if (modeToggle.checked) {
            stylesheet.href = "css/style1.css";
        } else {
            stylesheet.href = "css/style2.css";
           
        }
    });
});
