
import Navbar from './components/UI/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Error404 from './components/Pages/Error404';
import UpdateUser from './components/Users/UpdateUser'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/edit_user/:id" component={UpdateUser}/>
            <Route component={Error404}/>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
