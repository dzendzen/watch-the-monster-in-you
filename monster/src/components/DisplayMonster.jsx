import React from 'react';
import './monster.css';



function DisplayMonster({ monster }) {
    return (
        <div className="DisplayMonster dsk-offset-1 dsk-2 tab-offset-1 tab-3 mob-offset-1 mob-3">
            <img className="monsterImg"
                src={monster.picture}
                alt={monster.name}
            />
            <ul className="ul">
                <li className="monsterName">
                     {monster.name}
                </li>
                
            </ul>
        </div>
    );
};

export default DisplayMonster;