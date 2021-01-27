import React from 'react';
import axios from 'axios';

class Invoice extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            booking: [],
        };

        
    
    }

    
    componentDidMount() {
        axios.get(
            `http://localhost:8080/HomePage/booking/${this.props.match.params.customername}`
        )
        .then((result) => {
            console.log(result);
            this.setState({
                booking: result.data,
            });
            
        });
    }

    homePage = (event) => {
        this.props.history.push("/");
    };

    render() {
        
        return (
            
            <div className="py-4">
               
                 <table class="table border shadow" border="2">
                    <thead>
                        <tr>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Your name</th>
                            <th scope="col">Contact no.</th>
                            <th scope="col">Email</th>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Theatre Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Total Seats</th>
                            <th scope="col">Total Amount</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.booking.map((b1, index) => (
                            <tr key={b1.bookingid}>
                                <td>{b1.bookingid}</td>
                                <td>{b1.customername}</td>
                                <td>{b1.customercontactno}</td>
                                <td>{b1.customeremail}</td>
                                <td>{b1.moviename}</td>
                                <td>{b1.theatrename}</td>
                                <td>{b1.date}</td>
                                <td>{b1.time}</td>
                                <td>{b1.totalseats}</td>
                                <td>{b1.totalamount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </div>
        );
    }
    
 }
 


export default Invoice;