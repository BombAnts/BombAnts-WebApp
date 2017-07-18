import React from 'react';

import MenuItem from './items/MenuItem.jsx';

class GameJoin extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onBack = this.onBack.bind(this);
    }

    onBack()
    {
        this.props.showMain();
    }

    render() {
        return (
            <div>
                <MenuItem text="TODO"/>
                <MenuItem text="Back" onClick={this.onBack} />
            </div>
        );
    }
}

export default GameJoin;
