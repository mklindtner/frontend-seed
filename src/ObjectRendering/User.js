import React, { Component } from 'react';


export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.user}</div>
        );
    }
}