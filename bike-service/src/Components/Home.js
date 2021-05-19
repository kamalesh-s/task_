import React, { useState } from 'react';
import "./Home.css";
import {Link }from "react-router-dom";
import background from "./Images/back.jpg";
import dateback from "./Images/backdata.png";
import {db }from "./firebase";

function Home() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [bikename, setBikename] = useState("")
    const [bikeno, setBikeno] = useState("")
    const [service, setService] = useState("")
     const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
   
   
  
    
    const addData = (event) => {
        event.preventDefault();
        db.collection("userdata")
        .doc()
        .set({ Name:name,
                Age:age,
                Bikename:bikename,
                Bikeno:bikeno,
                Service:service,
                Mobilenumber:number,
                choosedate:date })
                .then(function(){
                    alert("Date booked");
                })
                .catch(function (error){
                    alert("Error writing value:",error);
                })
      };

    
    


    return (
        <div className="home">
            <div className="home_page" style={{ backgroundImage: `url(${background})` }}> 

            <Link exact to="/login">
            <button className="sign_in">SignIn</button>
            </Link>
      <span className="textone">BOOK YOUR <br/> BIKE SERVICE <br/> DATE HERE<br/>
      <button className="service_button" href=".book_date">Book Here</button></span>
        </div> 
        
        <div  >
        <div className="book_date" style={{ backgroundImage: `url(${dateback})`  }}>
        <h1>Book Your Date</h1>
        <form id="form_data">
       <h3> Name:</h3><input type="text" value={name} onChange={e=> setName(e.target.value)} />
       <h3>  Age:</h3><input type="number" value={age} onChange={e=> setAge(e.target.value)} />
       <h3>  Bike Name:</h3><input type="text" value={bikename} onChange={e=> setBikename(e.target.value)}/>
       <h3>  Bike No:</h3><input type="tel" value={bikeno} onChange={e=> setBikeno(e.target.value)}/>
       <h3>Type your service:</h3><input type="text" value={service} onChange={e=> setService(e.target.value)}/>
       <h3>  Mobile Number:</h3><input type="number" value={number} onChange={e=> setNumber(e.target.value)}/>
       <h3>  Choose Date:</h3><input type="date" value={date} onChange={e=> setDate(e.target.value)}/><br/>
       <button onClick={addData} >Submit </button>
        </form>
            </div>
            </div>
          
            </div>
            
           
           
        
    )
    }


export default Home
