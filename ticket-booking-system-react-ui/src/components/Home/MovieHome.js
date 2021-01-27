import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MovieHome extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/admin/movies`).then((result) => {
      // alert(JSON.stringify(result.data));
      // following statement will give you error:- do not mutate state directly use useState
      //this.state.students = result.data;
      console.log(result);
      this.setState({
        movies: result.data,
      });
    });
  }


  render() {
    return (
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Movie Id</th>
              <th scope="col">Movie Image</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Movie FirstName</th>
              <th scope="col">Movie LastName</th>
              <th scope="col">Movie Description</th>
              <th scope="col">Movie Date</th>
              <th scope="col">Movie Time</th>
              <th scope="col">Movie Type</th>
              <th scope="col">Movie Language</th>
              <th scope="col">Movie Trailer</th>
              <th scope="col">Movie Theatre Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr>
                <td>{movie.movieid}</td>
                <td>{movie.movieimage}</td>
                <td>{movie.moviename}</td>
                <td>{movie.movieFname}</td>
                <td>{movie.movieLname}</td>
                <td>{movie.moviedescription}</td>
                <td>{movie.moviedate}</td>
                <td>{movie.movietime}</td>
                <td>{movie.movietype}</td>
                <td>{movie.movielanguage}</td>
                <td>{movie.trailerlink}</td>
                <td>{movie.theatres.theatrename}</td>
                <td>
                 <Link
                    className="btn btn-primary mr-2"
                    to={`/movies/view/${movie.movieid}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/movies/modify/${movie.movieid}`}
                  >
                    Modify
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/movies/delete/${movie.movieid}`}
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

export default MovieHome;