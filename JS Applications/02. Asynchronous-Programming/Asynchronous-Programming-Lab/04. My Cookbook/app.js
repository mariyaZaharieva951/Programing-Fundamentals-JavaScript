window.addEventListener('load', load);

function load(event) {
    event.preventDefault();
    let main = document.querySelector('main');
    main.innerHTML = "";

    fetch(`http://localhost:3030/jsonstore/cookbook/recipes`)
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach((recipe) => {
            
            let article = document.createElement('article');
            let divTitle = document.createElement('div');
            let h2 = document.createElement('h2');
            let divSmall = document.createElement('div');
            let img = document.createElement('img');

            article.classList = 'preview';
            divTitle.classList = 'title';
            h2.textContent = data[recipe].name;
            divSmall.classList = 'small';
            img.src = data[recipe].img;

            divTitle.appendChild(h2);
            divSmall.appendChild(img);

            article.appendChild(divTitle);
            article.appendChild(divSmall);

            main.appendChild(article)

            article.addEventListener('click', function recipeClick(event) {
                main.innerHTML = '';
                fetch(`http://localhost:3030/jsonstore/cookbook/details/${data[recipe]._id}`)
                .then(response => response.json())
                .then(data => {
                        let article = document.createElement('article');
                        let h2 = document.createElement('h2');
                        let divBand = document.createElement('div');
                        let divThumb = document.createElement('div');
                        let img = document.createElement('img');
                        let divIngredient = document.createElement('div');
                        let h3 = document.createElement('h3');
                        let ul = document.createElement('ul');
                        let divDescription = document.createElement('div');
                        let h3Preparation = document.createElement('h3');

                        h2.textContent = data.name;
                        divBand.classList = 'band';
                        divThumb.classList = 'thumb';
                        img.src = data.img;
                        divIngredient.classList = 'ingredients';
                        h3.textContent = 'Ingredients:';
                        let ingredients = data.ingredients;
                        ingredients.forEach((ingridient => {
                            let li = document.createElement('li');
                            li.textContent = ingridient;
                            ul.appendChild(li)
                        }))
                        divDescription.classList = 'description';
                        h3Preparation.textContent = 'Preparation:';
                        let steps = data.steps;
                        divDescription.appendChild(h3Preparation);
                        steps.forEach((step) => {
                            let p = document.createElement('p');
                            p.textContent = step;
                            divDescription.appendChild(p);
                        })

                        divIngredient.appendChild(h3);
                        divIngredient.appendChild(ul);

                        divThumb.appendChild(img);
                        divBand.appendChild(divThumb);
                        divBand.appendChild(divIngredient);

                        article.appendChild(h2);
                        article.appendChild(divBand);
                        article.appendChild(divDescription);

                        main.appendChild(article);

                })
            })
        })
    })
}


