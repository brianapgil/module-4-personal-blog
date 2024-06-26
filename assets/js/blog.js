const sectionEl = document.querySelector('section');
const backButton = document.querySelector('#back-button');

function getLocalStorage() {
    const blogPost = localStorage.getItem('blogSubmissions');
    if (!blogPost) {
      console.log("no data in local storage")
      return [];
    }
    let data = JSON.parse(blogPost);
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

function goBack() {
  window.location.href = "index.html";
}

getLocalStorage();
renderBlogList();

backButton.addEventListener('click', goBack);











