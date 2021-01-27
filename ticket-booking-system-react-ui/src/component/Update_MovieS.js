
import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types'
class UpdateMovieS extends Component {
  state = {
    movieid: "",
    movieimage: "",
    moviename: "",
    movieFname: "",
    movieLname:"",
    moviedescription:"",
    moviedate:"",
    movietime:"",
    movietype:"",
    movielanguage:"",
    trailerlink:"",
    theatreid:"",
    theatres: [],
    
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8081/showincharge/${this.props.match.params.theatrename}/${this.props.match.params.movieid}`
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
          theatreid: result.data.theatreid,
        });
      });
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
    let movie = {
        //movieid: this.state.movieid,
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
      theatres: {
        theatreid: this.state.theatreid,
      },
    };
    console.log(this.props.match.params.movieid);
    axios.put(`http://localhost:8081/showincharge/${this.props.match.params.theatrename}/update`, movie)
    // redirect you to Home component after adding user
    .then((data)=>{ alert("Movie is Updated.");},
    (error) => {
      alert("Movie is not Updated.");
    })
    .catch((error)=>{alert(error.response.data.message);  });
    console.log("Hellooo...");
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Update details of Movie</span>
        </h1>
        <div className="form-group mr2">
          <label>Movie ID</label>
          <input
            type="text"
            className="form-control"
            id="movieid"
            placeholder="Enter Movie Id"
            value={this.state.movieid}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Movie Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={this.state.movieimage}
            onChange={(event) =>
              this.setState({ movieimage: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Movie Name"
            value={this.state.moviename}
            onChange={(event) =>
              this.setState({ moviename: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Fname</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter Movie FName"
            value={this.state.movieFname}
            onChange={(event) =>
              this.setState({ movieFname: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Lname</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter Movie LName"
            value={this.state.movieLname}
            onChange={(event) =>
              this.setState({ movieLname: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Description</label>
          <input
            type="text"
            className="form-control"
            id="moviedesc"
            placeholder="Enter Movie Description"
            value={this.state.moviedescription}
            onChange={(event) =>
              this.setState({ moviedescription: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Select Movie Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter Movie Date"
            value={this.state.moviedate}
            onChange={(event) =>
              this.setState({ moviedate: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Select Movie Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            placeholder="Enter Movie Time"
            value={this.state.movietime}
            onChange={(event) =>
              this.setState({ movietime: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Enter Movie Type"
            value={this.state.movietype}
            onChange={(event) =>
              this.setState({ movietype: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Language</label>
          <input
            type="text"
            className="form-control"
            id="movielan"
            placeholder="Enter Movie Language"
            value={this.state.movielanguage}
            onChange={(event) =>
              this.setState({ movielanguage: event.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Trailer Link</label>
          <input
            type="text"
            className="form-control"
            id="trailer"
            placeholder="Enter Movie Trailer Link"
            value={this.state.trailerlink}
            onChange={(event) =>
              this.setState({ trailerlink: event.target.value })
            }
            required
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
          Modify Movie
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
export default UpdateMovieS;
