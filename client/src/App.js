import Login from './components/login/login';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import Search from './components/search/search';
import Item from './components/item/item';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect from="/home" to="/"/>
          <Route path="/about" component={About}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/item" component={Item}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
