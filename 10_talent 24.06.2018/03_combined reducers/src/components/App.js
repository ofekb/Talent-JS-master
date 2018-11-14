import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>

        <span>&copy; {this.props.name}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  //filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
      count: state.counterReducer.count,
      name: state.userReducer.user.userName
    };
} 

/**
 * connect - is a built-in function in 'react-redux'
 * Connects a React component to a Redux store.
 * @param mapStateToProps = a function that gets as a parameter the state and returns a simple object
 * @returns a function that has to get a component 
 * (the function will bind to this component the returned value from "mapStateToProps" into the props) 
 */
const reduxApp = connect(mapStateToProps)(App);
export default reduxApp;