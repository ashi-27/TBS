import React, { Component } from "react";
import axios from "axios";

class ModifyMovie extends Component {

state = {
    movieid: 0,
    movieimage: "",
    moviename: "",
    movieFname: "",
    movieLname: "",
    moviedescription: "",
    moviedate: "",
    movietime: "",
    movietype: "",
    movielanguage: "",
    trailerlink: "",
    theatreid:"",
    theatres:[],
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/admin/movies/${this.props.match.params.movieid}`
      )
      .then((result) => {
        // alert("Dept Id: " + result.data.department);
        this.setState({
         movieid: result.data.movieid,
         movieimage: result.data.movieimage,
         moviename: result.data.moviename,
         movieFname: result.data.movieFname,
         movieLname: result.data.movieLname,
         moviedescription: result.data.moviedescription,
         moviedate: result.data.moviedate,
         movietime: result.data.movietime,
         movietype: result.data.movietype,
         movielanguage: result.data.movielanguage,
         trailerlink: result.data.trailerlink,
         theatreid: result.data.theatres.theatreid,
        });
      });

      axios
      .get(`http://localhost:8080/admin/theatres/`)
      .then((data) => {
        let theats = data.data.map((theat) => {
          return { value: theat.theatreid, display: theat.theatrename };
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
      movieid: this.state.movieid,
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
        // theatrename: this.state.theatrename,
        // address: this.state.address,
        // location: this.state.location,
      },
    };
    await axios.put(`http://localhost:8080/admin/update/${this.props.match.params.movieid}`, movie);
    // redirect you to Home component after adding user
    console.log("Updated succesfully");
    this.props.history.push("/moviehome");
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Modify Movies</span>
        </h1>
        <div className="form-group mr2">
          <input
            type="text"
            className="form-control"
            id="movieId"
            //placeholder="Enter Student Id"
            value={this.state.movieid}
            readOnly
          />
          </div>

<div className="form-group">
          <input type="file" className="form-control" id="movieImage" placeholder="Enter Image"
                  //value={this.state.movieimage}
                   onChange={(event) => this.setState({ movieimage: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="movieName" placeholder="Enter Movie Full Name"
                  value={this.state.moviename} onChange={(event) => this.setState({ moviename: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="moviefname" placeholder="Enter Movie First Name"
                  value={this.state.movieFname} onChange={(event) => this.setState({ movieFname: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="movieLname" placeholder="Enter Movie Last Name"
                  value={this.state.movieLname} onChange={(event) => this.setState({ movieLname: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <textarea className="form-control" id="movieDescription" placeholder="Enter Movie Description"
                  value={this.state.moviedescription} onChange={(event) => this.setState({ moviedescription: event.target.value }) }
          ></textarea>
        </div>

        <div className="form-group">
          <input type="Date" className="form-control" id="movieDate" placeholder="Enter Movie Date"
                  value={this.state.moviedate} onChange={(event) => this.setState({ moviedate: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="time" className="form-control" id="movieTime" placeholder="Enter Movie Time"
                  value={this.state.movieTime} onChange={(event) => this.setState({ movieTime: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="movieType" placeholder="Enter Movie Type"
                  value={this.state.movietype} onChange={(event) => this.setState({ movietype: event.target.value }) }
          />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="movieLanguage" placeholder="Enter Movie Language"
                  value={this.state.movielanguage} onChange={(event) => this.setState({ movielanguage: event.target.value }) }
          />
        </div>

        <div className="form-group">
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
          Modify Movies
        </button>
        </form>
    );
  }

  
}



export default ModifyMovie;