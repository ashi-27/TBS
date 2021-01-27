import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import AddMovieS from "./Add_MovieS";
//import ViewMovie from "./View_MovieS";

class Home extends Component {
constructor(props){
  super(props);
  this.state = {
    movies: [],
    //theatrename:'cinemax'
  };
}
componentDidMount() {
    axios.get(`http://localhost:8081/showincharge/${this.props.match.params.theatrename}`)
    //(`http://localhost:8081/showincharge/`)
    .then((result) => {
      console.log(result);
       this.setState({
           movies: result.data,
       });
      console.log(this.state.theatres);
      });
  }
  render() {
    return (
      <div className="py-4">
        <center>
         <table border='2'>
            <thead>
            <tr>
                <th>Movie ID</th>
                <th>Movie Image</th>
                <th>Movie Name</th>
                <th>Movie Fname</th>
                <th>Movie Lname</th>
                <th>Description</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Language</th>
                <th>Trailerlink</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {this.state.movies.map((m1,index) =>
         (<tr key={m1.movieid}>
           <td>{m1.movieid}</td>
           <td>{m1.movieimage}</td>
           <td>{m1.movieName}</td>
           <td>{m1.movieFname}</td>
           <td>{m1.movieLname}</td>
           <td>{m1.movieDescription}</td>
           <td>{m1.movieDate}</td>
           <td>{m1.movieTime}</td>
           <td>{m1.movieType}</td>
           <td>{m1.movieLanguage}</td>
           <td>{m1.trailerlink}</td>
           <td>
                  {/* <Link
                    className="btn btn-primary mr-2"
                    to={`/view/${m1.movieid}`}
                  >
                    View
                  </Link> */}
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/${this.props.match.params.theatrename}/update/${m1.movieid}`}
                  >
                    Modify
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/${this.props.match.params.theatrename}/delete/${m1.movieid}`}
                  >
                    Delete
                  </Link>
                </td>
        </tr>)
            )
}
            </tbody>
            </table>
            </center>
           
      </div>
    );
  }
}

export default Home;
