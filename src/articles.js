let articles=[
    { id:1, title:'First Blog Post', slug: 'first-blog-post', excerpt:"This is an excerpt from first Blog Post", content: "<b>Post Heading <br><b><i> Content starts from here <i>"},
    { id:2, title:'Second Blog Post', slug: 'second-blog-post', excerpt:'This is an excerpt from the second blog post', content: 'Second article starts here. <br> Author: XYZ'},
    { id:3, title:'Third Blog Post', slug: 'third-blog-post', excerpt:'Third Article excerpt', content:" This is the third article on the blog"},
];

let inMemoryArticles ={
    getAll(callback) {
        callback(articles);
    },
    getBySlug(slug, callback){
        let foundArticle=null;

        for (let i=0;i<articles.length;i++){
            if (articles[i].slug===slug){
                foundArticle = articles[i];
                break;
            }
        }

        callback(foundArticle);
    }
};

export default inMemoryArticles;