import React from 'react';

import MenuItem from './items/MenuItem.jsx';
import MenuItemGame from './items/MenuItemGame.jsx';

class GameJoin extends React.Component
{

    constructor(props)
    {
        super(props);

        var self = this;

        this.state = {
            games : []
        };

        this.onBack = this.onBack.bind(this);
        this.onJoin = this.onJoin.bind(this);

        document.addEventListener('game.list', function(e) {
            var message = e.detail;
            self.setState({'games' : message.data});
        });

    }

    componentWillMount()
    {
        var event = new CustomEvent('client.menuJoinGame');
        document.dispatchEvent(event);
    }

    onJoin(id)
    {
        console.log('Joining game', id);
    }

    onBack()
    {
        this.props.showMain();
    }

    render() {
        var self = this;

        return (
            <div>
                <MenuItem text="TODO"/>
                { this.state.games.map((game, i) =>
                    <MenuItemGame id={game.id} text={game.name} onClick={self.onJoin} />
                )}
                <MenuItem text="Back" onClick={this.onBack} />
            </div>
        );
    }
}

export default GameJoin;
