/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {App} from './App';

export class NavBar extends React.Component {

	constructor(props){
		super(props);
		this.state={
			onClick: false
		}
		this.changeLogIn=this.changeLogIn.bind(this)
	}

	changeLogIn() {
    const newLog = this.state.onClick == false ? true : false;
    this.setState({ onClick: newLog });
  }

  render() {
  	const pages=['Access']
  	const navLinks= pages.map(page=>{
  		return (
  			<div className='Navigation'>
  			<button id="NavButton" className='NavButton' href={'/' + page} onClick={this.changeLogIn} >
  			{page}
  			</button>
  			</div>

  			)
  	});
  	return <nav>{navLinks}</nav>;
  }
}

