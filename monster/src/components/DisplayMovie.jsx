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