import './App.css';
import Navbar from './components/navigation';
import Bloglist from './components/bloglist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Singleblog from './components/singleblog';
import Addblog from './components/addblogs'
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Bloglist}/>
          <Route exact path='/single/:postid' render={props=>(
            <Singleblog {...props}/>
          )} />
        </Switch>
        <Switch>
          <Route exact path="/addblog" component={Addblog}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
