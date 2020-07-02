import React, {Component} from 'react';
class Page extends Component{
    componentDidMount(){
        document.title=this.props.title;
        
    }

    render(){
        return (
            <main>
                <section className="head is-dark">
                    <div className="head-body">
                        <div className="container">
                            <h1 className="title">{this.props.title}</h1>
                            <h2 className="subtitle">{this.props.subtitle}</h2>

                        </div>
                    </div>
                </section>
                <section className="page-content">
                    <div className="container">{this.props.content}</div>
                </section>
            </main>
        );
    }
}

export default Page;