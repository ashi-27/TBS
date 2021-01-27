import React, { Component } from "react";
import axios from "axios";
class ViewMovieS extends Component {
  constructor(props){
     super(props);
        this.state = {
            movies: [],
           // theatres:[],
  };
}
componentDidMount(){
  axios.get(`http://localhost:8081/showincharge/${this.props.match.params.theatrename}`
  )
  .then((result) => {
    console.log("hello");
      console.log(result);
      this.setState({
          movies: result.movies,
      });
      //console.log(this.state.theatres);
  });
}
homePage = (event) => {
  this.props.history.push("/");
};
  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Movie</span>
        </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
            <th scope="col">Movie Id</th>
            <th scope="col">Movie Image</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Movie FName</th>
            <th scope="col">Movie LName</th>
            <th scope="col">Movie Description</th>
            <th scope="col">Movie Date</th>
            <th scope="col">Movie Time</th>
            <th scope="col">Movie Type</th>
            <th scope="col">Movie Language</th>
            <th scope="col">Movie Trailerlink</th>
            <th scope="col">Theatre Name</th>
            <th scope="col">Theatre Address </th>
            <th scope="col">Theatre Location </th>
            </tr>
          </thead>
          <tbody>
          {this.state.movies && this.state.movies.map(m1 =>
         (<tr key={m1.movieid}>
           <td>{m1.movieid}</td>
           <td>{m1.movieimage}</td>
           <td>{m1.moviename}</td>
           <td>{m1.movieFname}</td>
           <td>{m1.movieLname}</td>
           <td>{m1.moviedescription}</td>
           <td>{m1.moviedate}</td>
           <td>{m1.movietime}</td>
           <td>{m1.movietype}</td>
           <td>{m1.movielanguage}</td>
           <td>{m1.trailerlink}</td>
           <td>{m1.movieTheatre}</td>
           <td>{m1.theatreAddress}</td>
           <td>{m1.theatreLocation}</td>
          </tr>
         ))
  }
          </tbody>
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

export default ViewMovieS;
