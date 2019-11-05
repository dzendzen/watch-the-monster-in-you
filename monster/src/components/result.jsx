import React from "react";
import Monster from "./Monster";
import Movie from "./Movies";
import './monster.css';

class Result extends React.Component{
    render(){
        return(

            <div className="row tab-12">
            
                   
               <Movie />   
               <Movie />
               <Monster />        
               <Movie />
               <Movie />
             
           </div>
        )
    }
}

export default Result;