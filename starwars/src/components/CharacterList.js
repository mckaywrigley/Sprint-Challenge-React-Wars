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
                list
                <Character />
            </div>
        )
    }
}

export default CharacterList;