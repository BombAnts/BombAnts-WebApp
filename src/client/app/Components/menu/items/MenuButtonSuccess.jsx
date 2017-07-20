import React from 'react';

class MenuInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this)
    }

    onClick()
    {
        if (this.props.onClick !== undefined) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div className="menuItemContainer">
                <button className="success" onClick={this.onClick}>{this.props.text}</button>
            </div>
        );
    }
}

export default MenuInput;
