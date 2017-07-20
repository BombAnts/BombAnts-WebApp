import React from 'react';

class MenuInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onInput = this.onInput.bind(this)
    }

    onInput(e)
    {
        this.onChange(e.target.value);
    }

    onChange(value)
    {
        if (this.props.onChange === undefined) {
            return;
        }

        this.props.onChange(value);
    }

    render() {
        return (
            <div className="menuItemContainer">
                <input onInput={this.onInput} type="text" placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default MenuInput;
