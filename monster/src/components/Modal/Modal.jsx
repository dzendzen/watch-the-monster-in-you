import React from 'react';
import './modal.css';



class Modal extends React.Component{
    render(){
        return(  


<div>
      <ul className="modal">
        <li>I love Bloody Mary.</li>
        <li>I prefer unicorn's milk.</li>
        <li>My favorite tools are saws</li>
        <li>I love fried eyes for breakfast</li>
      </ul>
      <a  href="../result.jsx">
                <button  className="btn-home" type="button"> Click me                 
                </button>
                </a>
</div>
        );
}}
export default Modal;