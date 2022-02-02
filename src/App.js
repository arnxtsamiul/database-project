import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Create from './Pages/Create/Create';
import Read from './Pages/Read/Read';
import Update from './Pages/Update/Update';
import Delete from './Pages/Delete/Delete';
import MenuBar from './Component/Home/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/create">
              <Create />
          </Route>
          <Route path="/read">
              <Read />
          </Route>
          <Route path="/update">
              <Update />
          </Route>
          <Route path="/delete">
              <Delete />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
