const sectionEl = document.querySelector('section');

function getLocalStorage() {
    const blogPost = localStorage.getItem('blogSubmission');
    let data = JSON.parse(blogPost);
    //console.log(data);
    return data || [];
}

const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
};

const renderBlogList = function () {
  const blogs = getLocalStorage();
  
  for (let blog of blogs) {
    const article = buildElement('article', null, sectionEl);
    buildElement('h2', blog.title, article);
    buildElement('blockquote', blog.content, article);
    buildElement('p', `Posted by: ${blog.username}`, article);
  }
};

//testButton.addEventListener('click', createBlog)


renderBlogList();











