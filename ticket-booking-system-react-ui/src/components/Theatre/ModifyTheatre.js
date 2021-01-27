import React, { Component } from "react";
import axios from "axios";
class ModifyTheatre extends Component {

    state = {
        theatreid: 0,
        theatrename: "",
        address: "",
        location: "",
    };

    componentDidMount() {
        axios
          .get(
            `http://localhost:8080/admin/theatres/${this.props.match.params.theatreid}`
          )
          .then((result) => {
            // alert("Dept Id: " + result.data.department);
            this.setState({
             theatreid: result.data.theatreid,
             theatrename: result.data.theatrename,
            address: result.data. address,
             location: result.data.location,
            });
        })
    
    }

    
handleSubmit = async (event) => {
    event.preventDefault();
    let theatre= {
        theatreid: this.state. theatreid,
     theatrename: this.state.theatrename,
     address: this.state.address,
     location: this.state.location,

};
await axios.put(`http://localhost:8080/admin/theatres/update/${this.props.match.params.theatreid}`, theatre);
// redirect you to Home component after adding user
console.log("Updated succesfully");
this.props.history.push("/theatrehome");
};


render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Modify Theatres</span>
        </h1>
        <div className="form-group mr2">
          <input
            type="text"
            className="form-control"
            id="theatreId"
            //placeholder="Enter Student Id"
            value={this.state.theatreid}
            readOnly
          />
          </div>

        <div className="form-group">
          <input type="text" className="form-control" id="moviename" placeholder="Enter name"
                  value={this.state.theatrename}
                   onChange={(event) => this.setState({ theatrename: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="addres" placeholder="Enter address"
                  value={this.state.address}
                   onChange={(event) => this.setState({ address: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="location" placeholder="Enter location"
                  value={this.state.location}
                   onChange={(event) => this.setState({ location: event.target.value }) }
          />
        </div>




        <button type="submit" className="btn btn-primary">
          Modify Theatres
        </button>
        </form>
    );
  }




}
export default ModifyTheatre;



