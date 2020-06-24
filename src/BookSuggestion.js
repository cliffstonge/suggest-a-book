import React, {Component} from 'react';
// import defaultImage from './defaultImage.png'

class BookSuggestion extends Component {
    render() {
        return (
            this.props.book.map(items => {
                return (
                    <div class="bookInfo" key={items.id}>
                        <img src={items.volumeInfo.imageLinks.thumbnail} alt={items.volumeInfo.title}/>
                        <div>
                            <p>{items.volumeInfo.title}</p>
                            <p>{items.volumeInfo.subtitle}</p>
                            <p>By: {items.volumeInfo.authors}</p>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default BookSuggestion;
