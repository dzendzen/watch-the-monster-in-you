import React from 'react';
import './modal.css';
import '../NavBar/Grid/Grid.css';



class Modal extends React.Component {
        render() {
                return (

                        <div className="modal dsk-offset-3 dsk-6 tab-offset-2 tab-8 mob-offset-1 mob-10">
                                <ul >
                                        <li className="questions">What's your favorite cocktail ?</li>
                                        <li>I love Bloody Mary.<input type="checkbox" name="audio" /></li>
                                        <li>I prefer unicorn's milk.<input type="checkbox" name="audio" /></li>
                                </ul>

                                <ul>
                                        <li className="questions">What's your favorite meal ?</li>
                                        <li>I love fried eyes for breakfast.<input type="checkbox" name="audio" /></li>
                                        <li>Young children's brains.<input type="checkbox" name="audio" /></li>
                                </ul>
                                <ul>
                                        <li className="questions">What's your favorite tool ?</li>
                                        <li>My chainsaw is my best friend.<input type="checkbox" name="audio" /></li>
                                        <li>I love playing around with my saw.<input type="checkbox" name="audio" /></li>
                                </ul>
                                <div>
                                        <a href="../../result">
                                                <button className="confirm" type="button"> Confirm
                                                </button>
                                        </a>
                                </div>
                        </div>
                );
        }
}

export default Modal;




