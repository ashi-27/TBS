import React, { Component } from "react";
import axios from "axios";
class DeleteMovieS extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(`http://localhost:8080/showincharge/${this.props.match.params.theatrename}/delete/${this.props.match.params.movieid}`
      )
      .then(
        (result) => {
          alert("Movie is deleted.");
        },
        (error) => {
          alert("Movie is not deleted.");
        }
      );
    this.props.history.push("/");
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteMovieS;
