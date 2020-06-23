import React, {Component} from 'react';

class BookSuggestion extends Component {
    render() {
    return (
        this.props.book.map(item => {
            return (
                <div key={item.id}>
                <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
                <p>{item.volumeInfo.title}</p>
                <p>{item.volumeInfo.subtitle}</p>
                <p>{item.volumeInfo.authors}</p>
                </div>
            )
            })
    )
    }
}

export default BookSuggestion;
