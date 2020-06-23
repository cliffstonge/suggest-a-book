import React, {Component} from 'react';
import axios from 'axios';
import BookSuggestion from './BookSuggestion.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      book: [],
      userInput: [],
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
      url: `https://www.googleapis.com/books/v1/volumes?q=subject:${this.state.userInput}`,
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

      <h1>Suggest a Book</h1>

      <form>
        <fieldset>
          <legend>Choose a genre:</legend>
          <label>Fantasy</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="fantasy" id="fantasy"/>

          <label>Science-Fiction</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="science-fiction" id="science-fiction"/> 

          <label>Mystery</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="mystery" id="mystery"/>

          <label>Thriller</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="thriller" id="thriller"/>

          <label>Young Adult</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="young-adult" id="young-adult"/>

          <label>History</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="history" id="history"/>

          <label>Science</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="science" id="science"/>

          <label>Biography</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="biography" id="biography"/>

          <label>Poetry</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="poetry" id="poetry"/>

          <label>Romance</label>
          <input onChange={this.handleChange} type="radio" name="genre" value="romance" id="romance"/> 
        </fieldset>
        <button onClick={this.handleClick}>Find me a book!</button>
      </form>

      <BookSuggestion book={this.state.book} />

    </div>
  );
  }
}

export default App;
