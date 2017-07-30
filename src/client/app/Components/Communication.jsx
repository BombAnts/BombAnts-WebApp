import React from 'react';
import Websocket from 'react-websocket';


class Communication extends React.Component {

    constructor(props) {
        super(props);

        this.connection = new WebSocket('ws://192.168.34.10:80');
        this.connection.onopen = function () {
            var event = new CustomEvent('server.connected');
            document.dispatchEvent(event);
        };

        this.connection.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };

        this.connection.onmessage = function (e) {
            var message = JSON.parse(e.data);

            var event = new CustomEvent(message.event, {'detail': message });
            document.dispatchEvent(event);

            // console.log(message);
        };

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        var self = this;

        document.addEventListener('user.authenticated', function(e) {
            var message = e.detail;
            self.id = message.id;
            self.token = message.token;
        });

        document.addEventListener('client.login', function(e) {
            var message = e.detail;

            self.login(message.userName);
        });

        document.addEventListener('client.menuJoinGame', function(e) {
            self.sendWithAuthentication({
                "path": "/games"
            });
        });

        document.addEventListener('client.gameCreate', function(e) {
            var message = e.detail;

            self.sendWithAuthentication({
                path: "/games/create",
                data: {
                    name:message.name
                }
            });
        });
    }

    login(playerName)
    {
        this.send({
            "path": "/login",
            data: {
                name:playerName
            }
        });
    }

    sendWithAuthentication(message) {
        message.id = this.id;
        message.token = this.token;
        this.send(message);
    }

    send(message)
    {
        this.connection.send(JSON.stringify(message));
    }

    render() {
        return null;
    }
}

export default Communication;
