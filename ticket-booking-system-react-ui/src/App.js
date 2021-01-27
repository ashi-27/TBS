import React,{Component} from "react";
import './App.css'
import Searchbox from "./components/Searchbox";
import Search from "./components/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {

  render()
  {
    return(

      <div className="container">
        <Router>
              <Switch>
                 <Route exact path="/" component={Searchbox} />
                 <Route exact path="/movies/home/:movieFname" component={Search} />
              </Switch>
        </Router>

      </div>
    )
  }
 
}
export default App;
