import React from 'react';

const Character = ({ char }) => {
    return (
        <div className="character">
            <h2>{char.name}</h2>
        </div>
    )
}

export default Character;