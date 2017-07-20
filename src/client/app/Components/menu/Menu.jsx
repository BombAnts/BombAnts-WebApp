import React from 'react';

import Main from './Main.jsx';
import Loading from './Loading.jsx';
import Login from './Login.jsx';
import GameJoin from './GameJoin.jsx';
import GameCreate from './GameCreate.jsx';

require('./Menu.scss');

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        var self = this;

        this.showMain = this.showMain.bind(this);
        this.showGameJoin = this.showGameJoin.bind(this);
        this.showGameCreate = this.showGameCreate.bind(this);

        // cache the menu's
        this.gameJoinMenu = <GameJoin
            showMain={this.showMain}
            showGameCreate={this.showGameCreate}
        />;
        this.gameCreateMenu = <GameCreate
            showMain={this.showMain}
            showGameJoin={this.showGameJoin}
        />;
        this.loadingMenu = <Loading
            showLogin={this.showLogin}
            text="CONNECTING"
        />;
        this.loginMenu = <Login
            showMain={this.showMain}
        />;
        this.mainMenu = <Main
            showGameJoin={this.showGameJoin}
            showGameCreate={this.showGameCreate}
        />;

        // event listeners
        document.addEventListener('server.connected', function(e) {
            self.showLogin();
        });

        document.addEventListener('user.authenticated', function(e){
            self.showMain();
        });

        this.state = {
            menu : this.loadingMenu
        };
    }

    showMain()
    {
        this.setState({menu: this.mainMenu});
    }

    showGameCreate()
    {
        this.setState({menu: this.gameCreateMenu});
    }

    showGameJoin()
    {
        this.setState({menu: this.gameJoinMenu});
    }

    showLogin()
    {
        this.setState({menu: this.loginMenu});
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
