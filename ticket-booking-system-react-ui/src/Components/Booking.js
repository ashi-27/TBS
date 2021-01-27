import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
//import { ReactComponent } from '*.svg';

class Booking extends React.Component{
    constructor(props){
       super(props);
       this.movieName=React.createRef();
       this.movieDate=React.createRef();
       this.movieTime=React.createRef();
       this.theatreName=React.createRef();
        this.state = {
           bookingid: 0,
           customername: "",
           customercontactno: "",
           customeremail: "",
           moviename: "",
           theatrename: "",
           totalseats: "",
           totalamount: "",
           date: "",
           time: ""
           
        };
    }

    componentDidMount() {

    }
    

    
  handleSubmit = async (event) => {
    event.preventDefault();
    let bookingDetails= {
      customername:this.state.customername,
      customercontactno:this.state.customercontactno,
      customeremail:this.state.customeremail,
      moviename: this.movieName.current.value,  
      theatrename: this.theatreName.current.value,
      totalseats: this.state.totalseats,
      totalamount: this.state.totalamount,
      date: this.movieDate.current.value,
      time: this.movieTime.current.value
      
    };
      await axios
      .post("http://localhost:8080/HomePage/movies/movieName/{moviename}/theatrename/{theatrename}/booking", bookingDetails)
      .then((data)=>
           console.log(data)
           )
      .catch((error)=>{alert(error.response.data.message);  });
      //this.props.history.push("/movies/cofirmBooking/GenerateInvoice/${customername}");
    };


    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <h1>Booking Page</h1>
               
               <div className="form-group">
                    <label>Enter Name</label>
                    <input type="text" className="form-control" id="customername" placeholder="--enter name--" required
                        value={this.props.match.params.customername} onChange={(event) => this.setState({ customername: event.target.value }) }
                    />
                </div>

                <div className="form-group">
                    <label>Enter Contact no.</label>
                    <input type="number" className="form-control" id="customercontactno" placeholder="--enter contact no.--" required
                        value={this.state.customercontactno} onChange={(event) => this.setState({ customercontactno: event.target.value }) }
                    />
                </div>

                <div className="form-group">
                    <label>Enter Email ID</label>
                    <input type="email" className="form-control" id="customeremail" placeholder="--enter email--" required
                       value={this.state.customeremail} onChange={(event) => this.setState({ customeremail: event.target.value }) }
                    />
                </div>
                
               <div className="form-group">
                   <label>Movie Name</label>
                  <input type="text" className="form-control" id="moviename" ref={this.movieName} required
                        value={this.props.match.params.movieName} //onChange={(event) => this.setState({ moviename: event.target.value }) }
                    />
               </div>
               
               <div className="form-group">
                    <label>Theatre Name</label>
                    <input type="text" className="form-control" id="theatrename" placeholder="Enter Theatre Name" ref={this.theatreName}
                        value={this.props.match.params.theatrename} //onChange={(event) => this.setState({ theatrename: event.target.value }) }
                    />
                </div>

               <div className="form-group">
                   <label>Total Seats</label>
                    <input type="text" className="form-control" id="totalseats" placeholder="Enter total seats" required
                        value={this.state.totalseats} onChange={(event) => this.setState({ totalseats: event.target.value }) }
                    />
               </div>

               <div className="form-group">
                   <label>Total Amount </label>
                    <input type="text" className="form-control" id="totalamount" placeholder="Enter total amount" required
                         value={this.state.totalamount} onChange={(event) => this.setState({ totalamount: event.target.value }) }
                    />
               </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="text" className="form-control" id="date" placeholder="Enter Date" ref={this.movieDate} required
                        value={this.props.match.params.movieDate} //onChange={(event) => this.setState({ date: event.target.value }) }
                    />
                </div>

                <div className="form-group">
                    <label>Time</label>
                    <input type="text" className="form-control" id="time" placeholder="Enter Time" ref={this.movieTime} required
                       value={this.props.match.params.movieTime} //onChange={(event) => this.setState({ time: event.target.value})}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Book Confirm
                </button>
                 <Link 
                    className="btn btn-primary"
                    to={`/movies/cofirmBooking/GenerateInvoice/${this.state.customername}`}
                >
                    Generate Invoice
                </Link> 
            </form>
        )
    }
  
}

export default Booking;
