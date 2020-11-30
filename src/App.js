import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Prescription } from './Prescription'
import { Login } from './Login';
import { UserInfo } from './components/Userinfo'
function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/userinfo" component={Prescription} />
        <Route exact path='/' component={Login} />


      </Switch>

    </Router>
  );
}

export default App;
