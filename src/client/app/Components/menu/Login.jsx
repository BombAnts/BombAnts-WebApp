import React from 'react';
import ButtonSuccess from './items/MenuButtonSuccess.jsx';
import Input from './items/MenuInput.jsx';

class LoginMenu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            userName : null
        };

        this.onUsername = this.onUsername.bind(this);
        this.login = this.login.bind(this);
    }

    onUsername(value)
    {
        this.state.userName = value;
    }

    login()
    {
        if (this.state.userName === null) {
            return;
        }

        var event = new CustomEvent('client.login', {'detail': {'userName' : this.state.userName} });
        document.dispatchEvent(event);
    }

    render() {
        return (
          <div>
              <Input onChange={this.onUsername} placeholder="Username" />
              <ButtonSuccess onClick={this.login} text="login" />
          </div>
        );
    }
}

export default LoginMenu;
