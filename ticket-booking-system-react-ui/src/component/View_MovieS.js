import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewMovieS extends Component {
  constructor(props){
     super(props);
        this.state = {
          theatrename:"",
  };
}

  render() {
    return (
      <div>
       

        <div className="form-group">
          <input type="text" 
          id="theatrename"
          placeholder="Enter Theatre Name"
          value={this.state.theatrename}
          onChange={(event)=>this.setState({theatrename:event.target.value})}
           required></input>
          <br/>
          <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/showincharge/${this.state.theatrename}`}
                  >
                    click here
                  </Link>
        </div>
      </div>
    );
  }
}

export default ViewMovieS;