import React from 'react';



function DisplayMonster({ monster }) {
    return (
        <div className="DisplayMonster">
            <img
                src={monster.picture}
                alt={monster.name}
            />
            <ul>
                <li>
                    Kind: {monster.name}
                </li>
                <li>Level: {monster.level}</li>
            </ul>
        </div>
    );
};

export default DisplayMonster;