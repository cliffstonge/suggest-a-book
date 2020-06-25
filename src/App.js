import React, {Component} from 'react';
import axios from 'axios';
import BookSuggestion from './BookSuggestion.js';
import Form from './Form.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      book: [],
      userInput: 'subject:fiction',
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput:event.target.value,
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    axios({
      url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.userInput}`,
      method: 'GET',
      responseType: 'JSON',
      params: {
        key: 'AIzaSyCWOxEYQrKzQYJlWSUKJKZE8KdQdWv4HTM',
        maxResults: 1,
        langRestrict: 'en',
        printType: 'books',
      },
    }).then((response) => {
        response = response.data.items;
        this.setState({
          book: response,
        })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Suggest a Book</h1>
          
          <Form handleChange={this.handleChange} handleClick={this.handleClick}/>
          
          <BookSuggestion book={this.state.book}/>
        </div>
      </div>
    );
  }
}

export default App;
