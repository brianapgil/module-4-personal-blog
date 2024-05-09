function renderBlogSubmission() {
    const blogPost = JSON.parse(localStorage.getItem('blogSubmission'))

    if (blogPost !== null) {
        document.getElementById('saved-username').innerHTML = blogPost.username;
        document.getElementById('saved-title').innerHTML = blogPost.title;
        document.getElementById('saved-content').innerHTML = blogPost.content;
      }
}
