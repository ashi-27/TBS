import React from 'react';
import { Link } from "react-router-dom";

class SearchBox extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			movieFname:"",
		};
		
	}
	render(){
	return (

		<div className='row d-flex align-items-center mt-4 mb-4'>
			<h2 >Search Movies..!!</h2>
			<input type="text" className="form-control" id="movieFname" placeholder="Type to search..." required
                        value={this.state.movieFname} onChange={(event) => this.setState({ movieFname: event.target.value }) }
                    />
					<br/>
			<Link 
                className="btn btn-primary"
                    to={`/movies/home/${this.state.movieFname}`}>
                   Search
            </Link> 

		</div>
	);
};
}

export default SearchBox;