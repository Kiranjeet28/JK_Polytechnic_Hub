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




$(document).ready(function () {
    // Function to toggle classes when ComputerHeading is clicked
    $("#computerHeading").click(function () {
      $("#computer").toggleClass("paperdiv paperdivBlock");
    });

    // Repeat the above pattern for other sections if needed
    // Example for ECHeading
    $("#ECHeading").click(function () {
      $("#EC").toggleClass("paperdiv paperdivBlock");
    });
 
    $("#TexHeading").click(function () {
        $("#Textile").toggleClass("paperdiv paperdivBlock");
      });

      $("#MLTHeading").click(function () {
        $("#MLT").toggleClass("paperdiv paperdivBlock");
      });


      $("#OMHeading").click(function () {
        $("#OMCA").toggleClass("paperdiv paperdivBlock");
      });



    
    

   
  });
