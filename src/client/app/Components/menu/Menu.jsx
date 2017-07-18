import React from 'react';

import Main from './Main.jsx';
import Login from './Login.jsx';
import GameJoin from './GameJoin.jsx';
import GameCreate from './GameCreate.jsx';

require('./Menu.scss');

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.showMain = this.showMain.bind(this);
        this.showGameJoin = this.showGameJoin.bind(this);
        this.showGameCreate = this.showGameCreate.bind(this);

        // cache the menu's
        this.mainMenu = <Main
            showGameJoin={this.showGameJoin}
            showGameCreate={this.showGameCreate}
        />;
        this.gameJoinMenu = <GameJoin
            showMain={this.showMain}
            showGameCreate={this.showGameCreate}
        />;
        this.gameCreateMenu = <GameCreate
            showMain={this.showMain}
            showGameJoin={this.showGameJoin}
        />;
        this.loginMenu = <Login
            showMain={this.showMain}
        />;

        this.state = {
            menu : this.mainMenu
        };
    }

    showMain()
    {
        this.setState({menu: this.mainMenu});
    }

    showGameJoin()
    {
        this.setState({menu: this.gameJoinMenu});
    }

    showGameCreate()
    {
        this.setState({menu: this.gameCreateMenu});
    }

    render() {
        return (
            <div className="menu">
                {this.state.menu}
            </div>
        );
    }
}

export default Menu;
