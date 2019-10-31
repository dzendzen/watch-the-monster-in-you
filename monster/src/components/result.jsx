import React from "react";
import Monster from "./Monster"
import Movie from "./Movies"
import "../App.css"

class Result extends React.Component{
    render(){
        return(
            <div className="result">
               <Monster />  
               <Movie />   
               <Movie />  
               <Movie />
               <Movie />
            </div>
        )
    }
}

export default Result;