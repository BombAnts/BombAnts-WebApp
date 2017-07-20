import React from 'react';
import {render} from 'react-dom';

import Communication from './Components/Communication';
import Menu from './Components/menu/Menu.jsx';

class App extends React.Component {

    constructor(props)
    {
        super(props);

        this.communication = <Communication/>;
    }

    render () {
        return (
            <div>
                {this.communication}
                <Menu />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
