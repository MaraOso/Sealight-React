import './App.css';
import Form from './Sealight_Native/Form'
import SealightApp from './Sealight_Native/EditorsPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Form/>
        </Route>
        <Route path='/design'>
          <SealightApp/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
