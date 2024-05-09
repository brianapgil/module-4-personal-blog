const usernameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit')

function saveBlogSubmission() {
    event.preventDefault();

    const blogSubmission = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    }

    if (!blogSubmission.username || !blogSubmission.title || !blogSubmission.content){
        //alert("Please fill out form.");
        console.log("hello");
    }
    console.log(blogSubmission.username);
    console.log(blogSubmission.title);
    console.log(blogSubmission.content);

    //localStorage.setItem('blogSubmission',JSON.stringify(blogsSubmission));
}

submitButton.addEventListener('click', saveBlogSubmission);