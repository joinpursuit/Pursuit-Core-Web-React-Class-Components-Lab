import "./Profile.css";

import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="picture-div">
                    <img id="user-picture" src="https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg" alt=""></img>
                </div>
                <div className="bio-div">
                    <h2>Andrew Clark</h2>
                    <h4>React Creator</h4>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        )
    }
}
