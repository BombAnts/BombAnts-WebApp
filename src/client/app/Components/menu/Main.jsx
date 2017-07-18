import React from 'react';

import MenuItem from './items/MenuItem.jsx';

class MainMenu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onJoinGame = this.onJoinGame.bind(this);
        this.onCreateGame = this.onCreateGame.bind(this);
    }

    onJoinGame()
    {
        this.props.showGameJoin();
    }

    onCreateGame()
    {
        this.props.showGameCreate();
    }

    render()
    {
        return (
          <div>
              <MenuItem text="Join game" onClick={this.onJoinGame} />
              <MenuItem text="Create game" onClick={this.onCreateGame}/>
          </div>
        );
    }
}

export default MainMenu;
