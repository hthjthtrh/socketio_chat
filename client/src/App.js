import React from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends React.Component{

  componentDidMount() {
    console.log(this.props)
  }
  
  render() {
    return (
      <div className="App">
        <p>Hi</p>
      </div>
    )
  }
}


export default connect(state => {
  return {
    appState: state
  }
})(App);
