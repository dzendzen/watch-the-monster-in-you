import React from 'react';



function DisplayMovie({ movie }) {
    return (
        <div className="DisplayMovie">
            <img
                src={movie.picture}
                alt={movie.name}
            />
            <ul>
                <li>
                    Kind: {movie.name}
                </li>
                <li>Level: {movie.level}</li>
            </ul>
        </div>
    );
};

export default DisplayMovie;