import SingleTrain from './Components/SingleTrain';
import Train from './Components/Train';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
    
      <Route exact path="/" component={Train} />
      <Route exact path="/train/:id" component={SingleTrain} />
        </Switch>
      </Router>
  );
}

export default App;
