import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {NavBar} from './NavBar'
import {Content} from './Content'
import {RectangularBox} from './RectangularBox'
import {LogIn} from './LogIn'

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      login:false
    }
  }

  changeContent() {
    const newContent = this.state.login == false ? true : false;
    this.setState({ login: newContent });
  }

  render() {
    if(this.state.login){
    return (
      <div className="App">
        <NavBar /> 
        <div>
        <Content />
      </div>
      </div>
    );
  }
  return (<div className="App">
        <NavBar/> 
        <div>
           <LogIn />
      </div>
      </div>
    );
}
}

export default App;
