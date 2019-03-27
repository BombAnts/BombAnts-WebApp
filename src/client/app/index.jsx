import React from 'react';
import {render} from 'react-dom';

import Communication from './Components/Communication';

class App extends React.Component {


    render () {
        return (
            <div>
                <Communication/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
