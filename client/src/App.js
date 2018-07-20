import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount(){
    fetch('/api')
    .then(res => res.json())
    .then(
        members => {
          this.setState({ members: members.message });
        }
    );
    
  }

  render() {
    const messages  = this.state;
    return <div className="App">
        <ul>
          { messages.members.map(
              p => <li key={p.id}>{p.name}</li>
            )
          }
        </ul>
      </div>;
    }
}

export default App;
