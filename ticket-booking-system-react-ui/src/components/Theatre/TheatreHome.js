import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class TheatreHome extends Component {
  state = {
    theatres: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/admin/theatres`).then((result) => {
      // alert(JSON.stringify(result.data));
      // following statement will give you error:- do not mutate state directly use useState
      //this.state.students = result.data;
      console.log(result);
      this.setState({
        theatres: result.data,
      });
    });
  }


  render() {
    return (
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Theatre Id</th>
              <th scope="col">Theatre Name</th>
              <th scope="col">Theatre Address</th>
              <th scope="col">Theatre Location</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.theatres.map((theatre, index) => (
              <tr>
                <td>{theatre.theatreid}</td>
                <td>{theatre.theatrename}</td>
                <td>{theatre.address}</td>
                <td>{theatre.location}</td>
               
                <td>
                 <Link
                    className="btn btn-primary mr-2"
                    to={`/theatres/view/${theatre.theatreid}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/theatres/modify/${theatre.theatreid}`}
                  >
                    Modify
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/theatres/delete/${theatre.theatreid}`}
                  >
                    Delete
                  </Link>
                </td>
             
             </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }




}

export default TheatreHome;