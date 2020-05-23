import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <form>
                <label>
                    <div className={'icon search-icon'}/>
                    <input type="text"
                           placeholder={"Search..."}
                           onChange={this.props.handleChange}/>
                </label>
            </form>
        )
    }
}

export default SearchBox;