
// ===============================
// Wedding Checklist
// ===============================

const checkboxes = document.querySelectorAll(
    ".checklist input"
);

const progress = document.getElementById("progress");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", updateProgress);

});


function updateProgress() {

    let completed = 0;

    checkboxes.forEach(function (checkbox) {

        if (checkbox.checked) {
            completed++;
        }

    });

    progress.textContent =
        "Completed: " + completed + " / " + checkboxes.length;
}


// ===============================
// Budget Calculator
// ===============================

function calculateBudget() {

    let venue =
        Number(document.getElementById("venue").value) || 0;

    let food =
        Number(document.getElementById("food").value) || 0;

    let photo =
        Number(document.getElementById("photo").value) || 0;

    let decoration =
        Number(document.getElementById("decoration").value) || 0;


    let total =
        venue + food + photo + decoration;


    document.getElementById("total").textContent =
        "Total: Rs. " + total.toLocaleString();

}


// ===============================
// Contact Form
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const formMessage =
        document.getElementById("formMessage");


    formMessage.textContent =
        "Thank you, " + name +
        "! We will contact you soon. 💕";


    contactForm.reset();

});