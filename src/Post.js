import "./Post.css";
import React, { Component } from 'react'

export default class Post extends Component {
	constructor() {
		super()

		this.title = 'Sample Post Title'
		this.image = 'https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg'
		this.description = 'This is the description of the post'
	}
	render() {
		return (
			<div className='Post' data-testid='post'>
				<p>{this.title}</p>
				<img src= {this.image} alt='post' />
				<p>{this.description}</p>
			</div>
		)
	}
}