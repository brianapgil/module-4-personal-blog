const sectionEl = document.querySelector('section');

function getLocalStorage() {
    const blogPost = localStorage.getItem('blogSubmission');
    if (!blogPost) {
      console.log("no data in local sorage")
      return [];
    }
    let data = JSON.parse(blogPost);
    console.log(data, "test");
    return data 

}

const buildElement = function (type, text, parent) {
  const tag = document.createElement(type);
  tag.textContent = text;
  parent.appendChild(tag);
  return tag;
};

const renderBlogList = function () {
  const blogs = getLocalStorage();
  if(blogs.length === 0){
    console.log("no blogs to display");
  }
  console.log(blogs.length, "blogslength");
  console.log(blogs, "TEST1");
  console.log(blogs.title, "TEST2");
  for (let blog of blogs) {
    if (!blog.title || !blog.content || !blog.username) {
      console.error("missing properties in blog", blog);
      continue
    }
    const article = buildElement('article', null, sectionEl);
    buildElement('h2', blog.title, article);
    buildElement('blockquote', blog.content, article);
    buildElement('p', `Posted by: ${blog.username}`, article);
  }
};

//testButton.addEventListener('click', createBlog)

getLocalStorage();
renderBlogList();











