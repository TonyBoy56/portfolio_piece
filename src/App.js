import React from 'react';
import { BrowserRouter as Router, 
Route, 
Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Antonio Cruz',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: '  About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "Title",
        subTitle: "Projects that make a difference",
        text: "Come see my work!"
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: "Contact Me"
      }
    }
  }

  render () {
    return (
      <Router>
        
      </Router>
    );
  }
}

export default App;