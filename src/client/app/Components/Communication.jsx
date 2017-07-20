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
            console.log('Receive:', e.data)
            var message = JSON.parse(e.data);

            var event = new CustomEvent(message.event, {'detail': message });
            document.dispatchEvent(event);

            console.log(message);
        };

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        var self = this;

        document.addEventListener('user.authenticated', function(e) {
            var message = e.detail;
            self.token = message.token;

            // self.send({
            //     token: self.token,
            //     path: "/games/create",
            //     data: {
            //         name:'test game'
            //     }
            // });
            //
            // self.send({
            //     "token": self.token,
            //     "path": "/games"
            // });
        });


        document.addEventListener('game.list', function(e) {
            var message = e.detail;
            message.data.forEach(function (game) {
                console.log('Game', game);
            });
        });

        document.addEventListener('client.login', function(e) {
            var message = e.detail;

            self.login(message.userName);
        });
    }

    login(playerName)
    {
        this.send({
            "token": self.token,
            "path": "/login",
            data: {
                name:playerName
            }
        });
    }

    handleData(data) {
        let result = JSON.parse(data);
        console.log('new message:');
        console.log(result);
    }

    send(message) {
        console.log('Send:', message);
        this.connection.send(JSON.stringify(message));
    }

    render() {
        return null;
    }
}

export default Communication;
