import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, Home } from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our Awesome App',
      another: 'Something Else',
      count: 0
    }
  }

  increaseCount() {
    // console.log(this);
    this.setState({
      count: this.state.count + 1
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.title}</h1> */}
        <Header 
          title={this.state.title} 
          another={this.state.another}
          increase={this.increaseCount.bind(this)} />

        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increaseCount.bind(this)}>Increase Count</button>

        <input type="text" 
          name="title" 
          value={this.state.title}
          onChange={this.handleChange.bind(this)} />


        <Route path="/" exact component={Home} />
        {/* <Route path="/home" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/contact"  component={Home} /> */}
      </div>
    );
  }
}

export default App;
