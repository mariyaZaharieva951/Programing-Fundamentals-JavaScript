class ArtGallery {
    constructor(creator) {
        this.creator = creator; 
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }
        this.listOfArticles = []; 
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        if(!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error ("This article model is not included in this gallery!");
        }
        let foundArticle = this.listOfArticles.find((x) => x.articleName === articleName);
        if(foundArticle) {
            foundArticle.quantity += quantity;
        }
        if(!foundArticle) {
        this.listOfArticles.push({articleModel:articleModel,articleName:articleName,quantity:quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`  
    }
    inviteGuest ( guestName, personality) {
        let foundGest = this.guests.find((x) => x.guestName === guestName);
        if(foundGest) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if(personality === 'Vip') {
            points = 500;
        } else if(personality === 'Middle') {
            points = 250;
        } 
        this.guests.push({guestName:guestName, points: points, purchaseArticle:0});
        return `You have successfully invited ${guestName}!`
    }
    buyArticle ( articleModel, articleName, guestName) {
         let foundArticle = this.listOfArticles.find((x) => x.articleName === articleName);
        if(!foundArticle || foundArticle.articleModel !== articleModel) {
            throw new Error("This article is not found.")
        }   
        if(foundArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        } 
        let foundGest = this.guests.find((x) => x.guestName === guestName);
        if(!foundGest) {
            throw new Error(`This guest is not invited.`)
        }
        if(foundGest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article."
        }
        
        if(foundGest.points >= this.possibleArticles[articleModel]) {
            foundGest.points -= this.possibleArticles[articleModel];
            foundArticle.quantity--;
            foundGest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo (criteria) {
        let result = [];
        if(criteria === 'article') {
            result.push(`Articles information:`);
            this.listOfArticles.forEach((line) => {
                return result.push(`${line.articleModel} - ${line.articleName} - ${line.quantity}`)
            })
            return result.join('\n')
        } else if(criteria === 'guest') {
            result.push(`Guests information:`);
            this.guests.forEach((line) => {
                return result.push(`${line.guestName} - ${line.purchaseArticle}`)
            })
            return result.join('\n')
        }
    }
}

let art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3))
console.log(art.addArticle('Item', 'Ancient vase', 2))

console.log(art.addArticle('picture', 'Mona Liza', 1))
console.log(art.inviteGuest('John', 'Vip'))
console.log(art.inviteGuest('Peter', 'Middle'));

console.log(art.buyArticle('picture', 'Mona Liza', 'John'))
console.log(art.buyArticle('item', 'Ancient vase', 'Peter'))
console.log(art.buyArticle('item', 'Mona Liza', 'John'))
