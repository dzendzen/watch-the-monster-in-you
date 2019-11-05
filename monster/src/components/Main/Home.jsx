import React from "react";
import "./home.css"
import {NavLink} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div >
                <div className="btn">
                <a  href="../modal">
                <button  className="btn-home" type="button"> Click me                 
                </button>
                </a>
                {/* <NavLink  to="/modal">
                 Click me                 
                </NavLink> */}
                </div>
            </div>
        )
    }
}

export default Home;