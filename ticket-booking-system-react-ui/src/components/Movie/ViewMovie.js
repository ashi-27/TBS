import React, { Component } from "react";
import axios from "axios";
class ViewMovie extends Component {
  state = {
    movies: {
      theatres: {},
    },
  };


  componentDidMount() {
    axios
      .get(`http://localhost:8080/admin/movies/${this.props.match.params.movieid}`)
      .then((result) => {
        this.setState({
          movies: result.data,
        });
      });
  }

  homePage = (event) => {
    // event.preventDefault();
    // alert("send to home page");
    this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Movie</span>
        </h1>
        <table className="table table-bordered">
          <tr>
            <td>Movie Id</td>
            <th>{this.state.movies.movieid}</th>
          </tr>
          <tr>
            <td>Movie Image</td>
            <th>{this.state.movies.movieimage}</th>
          </tr>
          <tr>
            <td>Movie Name</td>
            <th>{this.state.movies.moviename}</th>
          </tr>
          <tr>
            <td>Movie Description</td>
            <th>{this.state.movies.moviedescription}</th>
          </tr>
          <tr>
            <td>Movie Date</td>
            <th>{this.state.movies.moviedate}</th>
          </tr>
          <tr>
            <td>Movie Time</td>
            <th>{this.state.movies.movietime}</th>
          </tr>
          <tr>
            <td>Movie Type</td>
            <th>{this.state.movies.movietype}</th>
          </tr>
          <tr>
            <td>Movie Language</td>
            <th>{this.state.movies.movielanguage}</th>
          </tr>
          <tr>
            <td>Movie Trailer</td>
            <th>{this.state.movies.trailerlink}</th>
          </tr>

          <tr>
            <td>Theatre Id</td>
            <th>{this.state.movies.theatres.theatreid}</th>
          </tr>
          <tr>
            <td>Theatre Name</td>
            <th>{this.state.movies.theatres.theatrename}</th>
          </tr>
          <tr>
            <td>Theatre Location</td>
            <th>{this.state.movies.theatres.location}</th>
          </tr>
          <tr>
            <td>Theatre Address</td>
            <th>{this.state.movies.theatres.address}</th>
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

export default ViewMovie;