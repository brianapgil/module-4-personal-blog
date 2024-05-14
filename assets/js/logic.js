const backButton = document.querySelector('#back-button');
const toggleButton = document.querySelectorAll('.toggle');

function goBack() {
    window.location.href = "index.html";
}



backButton.addEventListener('click', goBack)
