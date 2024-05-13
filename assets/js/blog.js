let testButton = document.getElementById('test')

function getLocalStorage() {
    const blogPost = localStorage.getItem('blogSubmission');
    let data = JSON.parse(blogPost);
    //console.log(data);
    return data || [];
}

function createBlog() {
  const blogs = getLocalStorage();
  console.log(blogs);
  const newArticle = $("<article></article>");
  const newH2 = $("<h2>");
  const newBlockQuote = $("<blockquote>");
  const newPTag = $("<p>");

  newArticle.append("hello");

}

testButton.addEventListener('click', createBlog)