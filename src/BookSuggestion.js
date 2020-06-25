import React, {Component} from 'react';
import defaultImage from './defaultImage.png'

class BookSuggestion extends Component {
    render() {
        return (
            this.props.book.map(items => {
                return (
                    <div className="bookSection">
                        <div className="bookReturn" key={items.id}>
                            {items.volumeInfo.imageLinks ? (
                                <img src={items.volumeInfo.imageLinks.thumbnail} alt={items.volumeInfo.title}/>
                                ) : (
                                <img src={defaultImage} alt="Book cover not available"/>
                                )
                            }

                            <div className="bookDetails"> 
                                <p className="title">{items.volumeInfo.title}</p>
                                <p className="subtitle">{items.volumeInfo.subtitle}</p>
                                <div className="author">
                                    <p>By:</p>
                                    {items.volumeInfo.authors.map(author => <p>{author}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default BookSuggestion;
