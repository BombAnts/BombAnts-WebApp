import React from 'react';

class MenuInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onInput = this.onInput.bind(this)
        this.isValid = this.isValid.bind(this)
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

        if (!this.isValid(value)) {
            this.props.onChange(null);
            return;
        }

        this.props.onChange(value);
    }

    isValid(value)
    {
        return value.length > 0;
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
