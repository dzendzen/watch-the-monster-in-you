import React from 'react';
import './monster.css';


function DisplayMovie({ movie }) {
    return (
        <div className="DisplayMovie dsk-offset-1 dsk-3 tab-offset-1 tab-2 mob-offset-1 mob-3">
            <h3>
                     {movie.title}
                </h3>
            <img className="movieImg"

                src={movie.posterUrl}
                alt={movie.title}
            />
            <ul>
                
                <li> {movie.director} ({movie.year})</li>
            
            </ul>
        </div>
    );
};

export default DisplayMovie;