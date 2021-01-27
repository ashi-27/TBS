import React, { Component } from "react";
import axios from "axios";
class DeleteMovie extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:8080/admin/delete/${this.props.match.params.movieid}`
      )
      .then(
        (result) => {
          alert("Movie is deleted.");
        },
        (error) => {
          alert("Movie is not deleted.");
        }
      );
    this.props.history.push("/moviehome");
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteMovie;
