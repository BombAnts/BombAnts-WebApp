import React from 'react';

import MenuItem from './items/MenuItem.jsx';
import Input from './items/MenuInput.jsx';
import ButtonSuccess from './items/MenuButtonSuccess.jsx';

class GameCreate extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            gameName : null
        };

        this.onGameName = this.onGameName.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    onGameName(value)
    {
        this.state.gameName = value;
    }

    onCreate()
    {
        var event = new CustomEvent('client.gameCreate', {'detail': {'name' : this.state.gameName} });
        document.dispatchEvent(event);
    }

    onBack()
    {
        this.props.showMain();
    }

    render() {
        return (
            <div>
                <MenuItem text="TODO"/>
                <Input onChange={this.onGameName} placeholder="Game name" />
                <ButtonSuccess onClick={this.onCreate} text="create" />
                <MenuItem text="Back" onClick={this.onBack} />
            </div>
        );
    }
}

export default GameCreate;
