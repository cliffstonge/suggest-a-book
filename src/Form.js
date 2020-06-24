import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="genre">
                <form>
                    <fieldset>
                        <legend>Choose a genre:</legend>

                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:fantasy"/>Fantasy</label>

                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:science-fiction"/>Sci-Fi</label>

                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:mystery"/>Mystery</label>
                        
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:thriller"/>Thriller</label>
                       
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:poetry"/>Poetry</label>
                        
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:romance"/>Romance</label>
                       
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:history"/>History</label>
                        
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:art"/>Art</label>
                       
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:biography"/>Biography</label>
                       
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:sports"/>Sports</label>
                        
                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="subject:travel"/>Travel</label>

                        <label><input onChange={this.props.handleChange} type="radio" name="genre" value="isbn:0451184106"/>Stargate</label>
                    </fieldset>

                    <button onClick={this.props.handleClick}>Find me a book!</button>
                </form>
            </div>
        )
    }
}

export default Form;
