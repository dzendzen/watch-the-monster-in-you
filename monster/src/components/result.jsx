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

               <Monster/>            

            </div>
        )
    }
}

export default Result;