import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class AdminRegister extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            adminid: 0,
            adminname: "",
            adminpassword: "",
            
        }
    }


    
  handleSubmit = async (event) => {
    event.preventDefault();
    let ad= {
      // movieId: this.state.movieId,
      adminname: this.state.adminname, 
      adminpassword: this.state.adminpassword,
    };
      await axios
      .post("http://localhost:8080/adminreg/insert", ad)
      .then((data)=>
           console.log(data))
      .catch((error)=>{alert(error.response.data.message);  });
        this.props.history.push("/");
    };



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Registration Page</h1>
             
            <div className="form-group">
               <label>Enter Name</label>
               <input type="text" className="form-control" id="adminname" placeholder="--enter name--" //ref={this.movieName}
                     value={this.props.match.params.adminname} onChange={(event) => this.setState({ adminname: event.target.value }) }
                 />
            </div>

            <div className="form-group">
                <label>Enter Password</label>
                 <input type="number" className="form-control" id="password" placeholder="--enter password.--"
                     value={this.state.adminpassword} onChange={(event) => this.setState({ adminpassword: event.target.value }) }
                 />
            </div>

            
             <button type="submit" className="btn btn-primary">
                 Register
             </button>
             <button type="reset" className="btn btn-primary">
                 Clear
             </button>
             
             {/* <Link 
                 className="btn btn-primary"
                 to={`/Home/movies`}
             >
                 Booking Form
             </Link> */}
         </form>
        )
    }

}

export default AdminRegister;