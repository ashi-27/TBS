import React, { Component } from "react";
import axios from "axios";
class ViewTheatre extends Component {
  state = {
   
      theatres: {},
    
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/admin/theatres/${this.props.match.params.theatreid}`)
      .then((result) => {
        this.setState({
          theatres: result.data,
        });
      });
  }

  homePage = (event) => {
    // event.preventDefault();
    // alert("send to home page");
    this.props.history.push("/theatrehome");
  };


  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Movie</span>
        </h1>
        <table className="table table-bordered">
          <tr>
            <td>Theatre Id</td>
            <th>{this.state.theatres.theatreid}</th>
          </tr>
          <tr>
            <td>Theatre Name</td>
            <th>{this.state.theatres.theatrename}</th>
          </tr>
          <tr>
            <td>Theatre Address</td>
            <th>{this.state.theatres.address}</th>
          </tr>
          <tr>
            <td>Theatre Location</td>
            <th>{this.state.theatres.location}</th>
          </tr>


          </table>

<div className="form-group">
  <button className="btn btn-primary" onClick={this.homePage}>
    Go Back
  </button>
</div>
</div>
);
}
  

}
export default ViewTheatre;