export class Article {
    constructor(
        public title: string, 
        public description: string, 
        public author: string,
        public imageUrl: string) {
            
        this.title = title;
        this.description = description;
        this.author = author;
        this.imageUrl = imageUrl;
    }
}