import React from 'react';
import Character from './Character';

class CharacterList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="characterList">
                {this.props.characters.map(char => {
                    return (
                        <Character 
                            key={char.created}
                            char={char}
                        />
                    )
                })}
            </div>
        )
    }
}

export default CharacterList;