import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Page from '../Components/Page';
import Article from '../Components/Article';
import Articles from '../articles';

class Blog extends Component{
    
    constructor(){
        super();
        this.state={
            articles:[],
        };
    }

    componentDidMount(){
        Articles.getAll(articles=>{
            this.setState({articles});
        });
    }

    render(){
        let existingUrl=this.props.match.path;
        let articlesList = this.state.articles.map(article=>{
            return(
                <article key = {article.id}>
                    <h2 className="is-size-3"><Link to={existingUrl+ '/' + article.slug}>{article.title}</Link></h2>
                    <p>{article.excerpt}</p>
                </article>
            );
        })

        return (
            <div>
                <Page title = "Welcome to the Blog posts!" subtitle=""></Page>
                <div className="container">
                    <Route exact={true} path="/blog" render={()=>(
                        <div> {articlesList} </div>
                    )}/>
                
                <Route exact={true} path="/blog" render={() => {
                    document.title = 'Blog'
                    return '';
                }}/>
                <Route exact={true} path="/blog/:slug" component={Article}/>
            </div>
            </div>
        );
    }
}

export default Blog;
