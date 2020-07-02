import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
import {Form, Button, FormControl} from 'react-bootstrap'
import Home from './screens/Home';
import About from './screens/About';
import Blog from './screens/Blog';


class App extends React.Component{

  state={
    searchText:""
  };

  handleSearchInput=event=>{
    this.setState({
      searchText:event.target.valur
    });
  };

  handleSearchSubmit=()=>{
    if(this.state.searchText){
      let text=this.state.searchText;
      this.setState({searchText:""})
      this.props.history.push({
        pathname:'/results',
        state:{searchText:text}
      });
    }else{
      alert("Please enter some search text!!");
    }
  };

  handleSearchKeyUp=event=>{
    event.preventDefault();
    if(event.key==='Enter' && event.keyCode===13){
      this.handleSearchSubmit();
    }
  }

  handleFormSubmit=e=>e.preventDefault();

  render(){
    return(
      <div>
        <Router>
        <nav className="navbar mr-auto">
          <div className="container">
          <div className="navbar-brand">
              <Link to="/"className="brand-text">CipherSchools</Link>
          </div>
          <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="outline-info">
                            Search
                        </Button>
                    </Form>
              <div id="navMenu" className="navbar-menu ml-auto" >
                <div className="navbar-start">
                  <NavLink to="/" exact activeClassName="is-active" className="navbar-item">Home</NavLink>
                  <NavLink to="/about" exact activeClassName="is-active" className="navbar-item">About</NavLink>
                  <NavLink to="/blog" exact activeClassName="is-active" className="navbar-item">Blog</NavLink> 
                </div>
                
                
              </div>
            </div>
          
        </nav>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        </Router>
      </div>
    );
  }
}
export default App;
