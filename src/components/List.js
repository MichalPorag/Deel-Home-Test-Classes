import React, { Component } from 'react';
import inputs from '../inputs'

class List extends Component {
    getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) =>
            <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? "bold" : {}}>
                        { part }
                    </span>);
    };

    render() {
        const searchText = this.props.searchBoxOutput.replace(/\s/g, '').toLowerCase();
        return (
            <ul>
                {
                    Array.from(inputs)
                        .filter(input => input.includes(searchText))
                        .map((inputFiltered, i) => <li key={i}>{this.getHighlightedText(inputFiltered, searchText)}</li>)
                }
            </ul>
        )
    }
}

export default List;