const toggleButton = document.querySelector('#toggle-button');

function darkModeToggle() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode"); 
    }
    else {
        element.classList.add("dark-mode");
    }
  }

toggleButton.addEventListener('click', darkModeToggle);