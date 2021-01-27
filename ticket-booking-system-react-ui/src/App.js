<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import './App.css';
import Navbar from "./component/Navbar";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/ShowInCharge_Home";
import AddMovieS from "./component/Add_MovieS";
import ViewMovieS from "./component/View_MovieS";
import UpdateMovieS from "./component/Update_MovieS";
import DeleteMovieS from "./component/Delete_MovieS";
class App extends React.Component {
  state={};
  render(){
    return (
      <div className="container">
        <Router>
        <Navbar />
            <Switch>
            <Route exact path="/showincharge/:theatrename" component={Home} />
            <Route exact path="/:theatrename/insert" component={AddMovieS }/>
            {/* <Route exact path="/showincharge/:theatrename" component={ViewMovieS} /> */}
            <Route exact path="/:theatrename/update/:movieid" component={UpdateMovieS} />
            <Route exact path="/:theatrename/delete/:movieid" component={DeleteMovieS} />
            </Switch>
        </Router>
        

      </div>
    );
  }
}
=======
<<<<<<< HEAD
=======
import { Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> e9e955ccf1f628af8d6f358012940c12072e9ca4

>>>>>>> b1c9d48d5474e337375e0972fb82c70844754307
import './App.css';
import './UI.css';
import React from "react";
import UI from './UI';

class App extends React.Component {
    state={};
    render(){
      return (
        <div className="container">
          <UI/>
          

        </div>
<<<<<<< HEAD
      );
    }
}
=======
      </div>
      </div>
    {/* Foot Note End */}
  </footer>
</>

      </div>
    );
  } 
>>>>>>> e9e955ccf1f628af8d6f358012940c12072e9ca4
>>>>>>> c1d0a704cb373184625d40f128fe1ee4ee28d571
>>>>>>> b1c9d48d5474e337375e0972fb82c70844754307

export default App;




>>>>>>> 773a9715b01f54b680990f4c6a4881e979400962
