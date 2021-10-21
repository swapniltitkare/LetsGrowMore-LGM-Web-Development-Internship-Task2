import './App.css';
import Navbar from './Navbar';
import UsersData from './UsersData';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path ='/' component= {HomePage}  />
          <Route exact path='/usersdata' component={UsersData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
