<<<<<<< HEAD
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
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 742146b8a5dd2f6ed42dc74605411eaba773a151
import './App.css';
import Navbar from "./component/Navbar";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/ShowInCharge_Home";
import AddMovieS from "./component/Add_MovieS";
import ViewMovieS from "./component/View_MovieS";
import UpdateMovieS from "./component/Update_MovieS";
import DeleteMovieS from "./component/Delete_MovieS";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Route exact path="/showincharge" component={ViewMovieS} />
            <Route exact path="/:theatrename/update/:movieid" component={UpdateMovieS} />
            <Route exact path="/:theatrename/delete/:movieid" component={DeleteMovieS} />
            </Switch>
        </Router>
        

      </div>
    );
  }
}
export default App

//import { Router, Switch, Route, Link } from "react-router-dom";
// import './App.css';
// import './UI.css';
// import React from "react";
// import Ui1 from './Ui1';
// import Contactus from './Contactus';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// class App extends React.Component {
//     state={};
//     render(){
//       return (
//         <div className="container">
//           <Ui1/>
//           <Router>        
//               <Route exact path="/Contactus" component={Contactus} />
              
//           </Router>


//         </div>
    
//       )
//   } 
// }
// export default App




>>>>>>> 773a9715b01f54b680990f4c6a4881e979400962
>>>>>>> 72069baef93cff9eb56408210ca99b74fde50483
