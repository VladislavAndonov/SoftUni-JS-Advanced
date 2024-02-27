function getArticleGenerator(articles) {
  let articlesContent = Array.from(articles);
  let contentRef = document.getElementById("content");

  return function () {
    if (!articlesContent.length) {
      return;
    }
    let currentArticleValue = articlesContent.shift();
    let newArticle = document.createElement("article");
    newArticle.textContent = currentArticleValue;
    contentRef.appendChild(newArticle);
  };
}
