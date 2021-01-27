import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'
class AddMovieS extends Component {
  state = {
    movieid: 0,
    movieimage: "",
    moviename: "",
    movieFname:"",
    movieLname:"",
    moviedescription:"",
    moviedate:"",
    movietime:"",
    movietype:"",
    movielanguage:"",
    trailerlink:"",
    theatreid: "",
    theatres: [],
};
  componentDidMount() {
    axios
      .get(`http://localhost:8081/showincharge/theatres`)
     // (`http://localhost:8081/showincharge/${this.props.match.params.theatrename}`)
      .then((data) => {
        let theats = data.data.map((theatre) => {
          return { value: theatre.theatreid, display: theatre.theatrename };
        });
        this.setState({
          theatres: [{ value: "", display: "Select Theatre" }].concat(
            theats
          ),
        });
      })
      .catch((error) => {
        alert(JSON.stringify("error: " + error));
      });
   }
   handleSubmit = async (event) => {
    event.preventDefault();
    let movie= {
      // movieId: this.state.movieId,
      movieimage: this.state.movieimage,
      moviename: this.state.moviename,
      movieFname: this.state.movieFname,
      movieLname: this.state.movieLname,
      moviedescription: this.state.moviedescription,
      moviedate: this.state.moviedate,
      movietime: this.state.movietime,
      movietype: this.state.movietype,
      movielanguage: this.state.movielanguage,
      trailerlink: this.state.trailerlink,
      theatres:{
        theatreid: this.state.theatreid,
      }
    };
      await axios
      .post(`http://localhost:8081/showincharge/${this.props.match.params.theatrename}/insert`, movie)
      .then((data)=>{alert("Movie is added.");},
      (error) => {
        alert("Movie is not inserted.");
      })
      .catch((error)=>{alert(error.response.data.message);  });
      this.props.history.push("/");
    };


      render()
      {
        return(

          <form onSubmit={this.handleSubmit}>
        <h1>
          Add details of Movies
        </h1>

        {/* <div className="form-group">
          <input type="text" className="form-control" id="movieId" placeholder="Enter Movie Id"
                  value={this.state.movieId} onChange={(event) => this.setState({ movieId: event.target.value }) }
          />
        </div> */}

<div className="form-group">
  <label>Movie Image</label>
          <input type="file" className="form-control" id="movieImage" placeholder="Enter Image"
                  value={this.state.movieimage} onChange={(event) => this.setState({ movieimage: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Name</label>
          <input type="text" className="form-control" id="movieName" placeholder="Enter Movie Full Name"
                  value={this.state.moviename} onChange={(event) => this.setState({ moviename: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Fname</label>
          <input type="text" className="form-control" id="moviefname" placeholder="Enter Movie First Name"
                  value={this.state.movieFname} onChange={(event) => this.setState({ movieFname: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Lname</label>
          <input type="text" className="form-control" id="movieLname" placeholder="Enter Movie Last Name"
                  value={this.state.movieLname} onChange={(event) => this.setState({ movieLname: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Description</label>
          <textarea className="form-control" id="movieDescription" placeholder="Enter Movie Description"
                  value={this.state.moviedescription} onChange={(event) => this.setState({ moviedescription: event.target.value }) }
          ></textarea>
        </div>

        <div className="form-group">
          <label>Select Movie Date</label>
          <input type="Date" className="form-control" id="movieDate" placeholder="Enter Movie Date"
                  value={this.state.moviedate} onChange={(event) => this.setState({ moviedate: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Select Movie Time</label>
          <input type="time" className="form-control" id="movieTime" placeholder="Enter Movie Time"
                  value={this.state.movieTime} onChange={(event) => this.setState({ movieTime: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Type</label>
          <input type="text" className="form-control" id="movieType" placeholder="Enter Movie Type"
                  value={this.state.movietype} onChange={(event) => this.setState({ movietype: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Language</label>
          <input type="text" className="form-control" id="movieLanguage" placeholder="Enter Movie Language"
                  value={this.state.movielanguage} onChange={(event) => this.setState({ movielanguage: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <label>Enter Movie Trailer Link</label>
          <input type="text" className="form-control" id="trailerLink" placeholder="Enter Movie Trailer Link"
                  value={this.state.trailerlink} onChange={(event) => this.setState({ trailerlink: event.target.value }) }
          />
        </div>
        <div className="form-group">
          <select className="form-control"
                  value={this.state.theatreid} onChange={(event) => this.setState({ theatreid: event.target.value }) }
          >
            {this.state.theatres.map((theatre) => (
              <option key={theatre.value} value={theatre.value}>
                {theatre.display}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
      </form>


        );
      }
}
Component.PropTypes={
  movieimage: PropTypes.string,
  moviename: PropTypes.string,
  movieFname:PropTypes.string,
  movieLname:PropTypes.string,
  moviedescription:PropTypes.string,
  moviedate:PropTypes.string,
  movietime:PropTypes.string,
  movietype:PropTypes.string,
  movielanguage:PropTypes.string,
  trailerlink:PropTypes.string
}
export default AddMovieS;

