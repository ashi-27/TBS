
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class ViewMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies: [],
        };
    }

    componentDidMount(){
        axios.get(
            `http://localhost:8080/HomePage/movies/movieName/${this.props.match.params.movieName}`
        )
        .then((result) => {
            console.log(result);
            this.setState({
                movies: result.data,
            });
            console.log(this.state.theatres);
        });
    }

    homePage = (event) => {
        this.props.history.push("/");
    };
    render(){
        return(
            <div>
                <h1>
                    <span className="badge badge-dark">View Movies</span>
                </h1>
                <table class="table border shadow" border="2">
                <thead class="thead-dark">
                       <tr>
                           <th scope="col">Theatre Name</th>
                           <th scope="col">Movie Name</th>
                           <th scope="col">Movie Date</th>
                           <th scope="col">Movie Time</th>
                           <th scope="col">Theatre Location</th>
                           <th scope="col">Theatre Address</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   
                <tbody>
                {this.state.movies.map(m1 => (
                    <tr>
                        <td>{m1.movieTheatre}</td>
                        <td>{m1.movieName}</td>
                        <td>{m1.movieDate}</td>
                        <td>{m1.movieTime}</td>
                        <td>{m1.theatreLocation}</td>
                        <td>{m1.theatreAddress}</td>
                        <td>
                             {/* <Link
                               className="btn btn-primary"
                                 to={`/movies/view/${m1.movieName}/${m1.movieTheatre}`}

                            >
                                Book
                            </Link> */}
                                    <Link  
                                        className="btn btn-primary"
                                        to={`/movies/view/${m1.movieName}/${m1.movieTheatre}/${m1.movieDate}/${m1.movieTime}/booking`}
                                    >
                                        Book
                                    </Link>
                                  
                        </td>
                        
                    </tr>
                ))}
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


export default ViewMovies;