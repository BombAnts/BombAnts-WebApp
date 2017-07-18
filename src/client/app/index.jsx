import React from 'react';
import {render} from 'react-dom';

import Communication from './Components/Communication';
import Menu from './Components/menu/Menu.jsx';

class App extends React.Component {


    render () {
        return (
            <div>
                <Menu/>
                <Communication/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
