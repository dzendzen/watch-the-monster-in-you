import React from 'react';



function DisplayMovie({ movie }) {
    return (
        <div className="DisplayMovie">
            <img
                src={movie.posterUrl}
                alt={movie.title}
            />
            <ul>
                <li>
                    Title: {movie.title}
                </li>
                <li>Director: {movie.director}</li>
                <li>Year: {movie.year}</li>
                <li></li>
            </ul>
        </div>
    );
};

export default DisplayMovie;