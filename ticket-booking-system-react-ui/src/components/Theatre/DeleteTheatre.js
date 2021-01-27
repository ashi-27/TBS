import React, { Component } from "react";
import axios from "axios";
class DeleteTheatre extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:8080/admin/theatres/delete/${this.props.match.params.theatreid}`
      )
      .then(
        (result) => {
          alert("Theatre is deleted.");
        },
        (error) => {
          alert("Theatre is not deleted.");
        }
      );
    this.props.history.push("/theatrehome");
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteTheatre;
