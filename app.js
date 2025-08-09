$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});



// form 

function bt()
{
    alert("thanks for connecting")
}


document.addEventListener('DOMContentLoaded', () => {
    const showFormButtons = document.querySelectorAll('.ord-btn');
    const formContainer = document.getElementById('form-container');
    const closeFormButton = document.getElementById('close-form');

    const showForm = () => {
        formContainer.style.display = 'flex';
    };

    showFormButtons.forEach(button => {
        button.addEventListener('click', showForm);
    });

    closeFormButton.addEventListener('click', () => {
        formContainer.style.display = 'none';
    });

    formContainer.addEventListener('click', (e) => {
        if (e.target === formContainer) {
            formContainer.style.display = 'none';
        }
    });
});

