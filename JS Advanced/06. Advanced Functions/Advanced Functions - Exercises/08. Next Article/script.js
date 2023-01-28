function getArticleGenerator(articles) {

    let output = document.getElementById('content');
    
    return function showNext(){
    
    if(articles.length > 0){
    let newArticle = document.createElement('article');
    newArticle.textContent = articles.shift();
    output.appendChild(newArticle);
    }
    }
    
}
