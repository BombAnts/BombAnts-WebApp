import React from 'react';

class MenuInput extends React.Component
{
    constructor(props)
    {
        if (props.name === undefined) {
            props.name = 'MenuItem';
        }

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
            <div onClick={this.onClick} className="menuItemContainer">{this.props.name}</div>
        );
    }
}

export default MenuInput;
