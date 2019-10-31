import React from "react";
import Monster from "./Monster"
import Movie from "./Movies"

class Result extends React.Component{
    render(){
        return(
            <div >
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