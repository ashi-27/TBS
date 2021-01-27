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

export default App;




