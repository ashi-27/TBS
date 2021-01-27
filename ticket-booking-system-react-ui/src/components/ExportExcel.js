import React, { Component } from 'react'  
import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

 class ExportExcel extends Component {  

constructor(props) {  
                super(props)  
                this.state = {  
                        MovieData: []  
                }  
                   } 

 componentDidMount() {  
                axios.get('http://localhost:8080/showincharge').then(response => {  
                        console.log(response.data);  
                        this.setState({  
                                MovieData: response.data  
                      });  
                });  
        }  

render() {  
return (  
        <div>  
            <table id="movie" class="table">  
                <thead>  
                    <tr>  
                        <th>Movie Name</th>  
                        <th>Movie Description</th>  
                        <th>Movie Date</th>  
                        <th>Movie Time</th>
                        <th>Movie Type</th>
                        <th>Movie Language</th> 
                    </tr>  
                 </thead>  
 <tbody>          
  {  
 this.state.MovieData.map((p, index) => {  
                                  return <tr key={index}>  
                                    <td >{p.moviename}</td>  
                                    <td >{p.moviedescription}</td>  
                                    <td >{p.moviedate}</td>  
                                    <td  >{p.movietime}</td>  
                                    <td>{p.movietype}</td>
                                    <td>{p.movielanguage}</td>

                                         </tr>  
})  

}                                                                                            
</tbody>  
 </table>  
 <div>  

     <ReactHTMLTableToExcel 
          className="btn btn-info"  
          table="emp" 
          filename="ReportExcel"  
          sheet="Sheet"  
          buttonText="Export excel" 
    />  
 </div>  
 </div>  
  )  
  }  

}  

export default ExportExcel;
