import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'

class AddTheatre extends Component {

    state = {
        theatreid: 0,
        theatrename: "",
        address: "",
        location: "",
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        let theatre= {
          theatrename: this.state.theatrename,
          address: this.state.address,
          location: this.state.location,
        }


    await axios
      .post("http://localhost:8080/admin/theatres/insert/", theatre)
      .then((data)=>{})
      .catch((error)=>{alert(error.response.data.message);  });
      this.props.history.push("/theatrehome");
    };


    render()
    {
      return(

        <form onSubmit={this.handleSubmit}>
      <h1>
        Add Theatres
      </h1>

      <div className="form-group">
          <label>Enter Theatre Name</label>
          <input type="text" className="form-control" id="theatrename" placeholder="Enter Name"
                  value={this.state.theatrename} onChange={(event) => this.setState({ theatrename: event.target.value }) } required
          />
        </div>
        <div className="form-group">
        <label>Enter Address</label> 
         <input type="text" className="form-control" id="address" placeholder="Enter Address"
                  value={this.state.address} onChange={(event) => this.setState({address: event.target.value }) } required
          />
        </div>
        <div className="form-group">
         <label>Enter Location</label> <input type="text" className="form-control" id="location" placeholder="Enter location"
                  value={this.state.location} onChange={(event) => this.setState({ location: event.target.value }) } required
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Add Theatre
        </button>
      </form>


        );
      }




}

Component.PropTypes={
  theatrename: PropTypes.string,
 address: PropTypes.string,
 location:PropTypes.string,

  }

export default AddTheatre;