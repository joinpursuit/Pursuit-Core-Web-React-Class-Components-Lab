import React, { Component } from 'react'
import "./Profile.css"

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-pic">
                    <img src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-black-default-avatar-image_2237212.jpg" alt=""></img>
                </div>
                <div className="profile-desc">
                    <h2>Jordan Walke</h2>
                    <h3>React Creator</h3>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        )
    }
}
