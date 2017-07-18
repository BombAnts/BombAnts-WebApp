import React from 'react';

class MenuItem extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this)
    }

    onClick()
    {
        if (this.props.onClick === undefined) {
            return;
        }

        this.props.onClick();
    }

    render() {
        return (
            <div onClick={this.onClick} className="menuItemContainer">{this.props.text}</div>
        );
    }
}

export default MenuItem;
