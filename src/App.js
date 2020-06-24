import React, {Component} from 'react';
import axios from 'axios';
import BookSuggestion from './BookSuggestion.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      book: [],
      userInput: 'fiction',
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

        <div class="main">
          <form>
            <fieldset>
              <legend>Choose a genre:</legend>
              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="fantasy" id="fantasy"/>
              <label>Fantasy</label>
              </div>
              
              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="science-fiction" id="science-fiction"/>
              <label>Science-Fiction</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="mystery" id="mystery"/>
              <label>Mystery</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="thriller" id="thriller"/>
              <label>Thriller</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="young-adult" id="young-adult"/>
              <label>Young Adult</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="history" id="history"/>
              <label>History</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="science" id="science"/>
              <label>Science</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="biography" id="biography"/>
              <label>Biography</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="poetry" id="poetry"/>
              <label>Poetry</label>
              </div>

              <div>
              <input onChange={this.handleChange} type="radio" name="genre" value="romance" id="romance"/> 
              <label>Romance</label>
              </div>
            </fieldset>
            <button onClick={this.handleClick}>Find me a book!</button>
          </form>
        
          <BookSuggestion book={this.state.book} />
          
        </div>

      </div>
    );
  }
}

export default App;
