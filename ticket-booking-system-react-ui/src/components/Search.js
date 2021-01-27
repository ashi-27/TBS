import React from 'react';
import axios from "axios";

class Search extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			movies: [],
		};
		
	}
	componentDidMount(){
		axios.get(`http://localhost:8080/search/movies/moviefname/${this.props.match.params.movieFname}`).then((result) => {
			console.log("Searching....");
            console.log(result);
            this.setState({
                movies: result.data,
            });
            
        });
    }
	
render()
{
	return(
		
			<div className="py-4">
               <table class="table border shadow" border="2">
                   <thead class="thead-dark">
                       <tr>
                           {/* <th scope="col">Movie Image</th> */}
						   <th scope="col">Movie Name</th>
                           <th scope="col">Movie Description</th>
                           <th scope="col">Movie Type</th>
                           <th scope="col">Movie Language</th>
                           <th scope="col">Movie Trailer Link</th>
                          
                       </tr>
                   </thead>
                   <tbody>
                     {this.state.movies.map((m1, index) => (
                           <tr key={m1.movieId}>
                               {/* <td>{m1.movieImage}</td> */}
                               <td>{m1.movieName}</td>
                               <td>{m1.movieDescription}</td>
                               <td>{m1.movieType}</td>
                               <td>{m1.movieLanguage}</td>
                               <td>{m1.trailerLink}</td>

                              
                           </tr>
                       ))}
                   </tbody>
               </table>
    
		</div>
	)
	}
}

export default Search;