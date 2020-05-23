import React, { Component } from 'react';
import './scss/App.scss';
import SearchBox from './components/SearchBox';
import List from './components/List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    updateSearchText(e) {
        this.setState({
            ...this.state,
            searchText: e.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <div className={'container menu-container'}>
                    <SearchBox handleChange={(e) => this.updateSearchText(e)}/>
                    <List searchBoxOutput={this.state.searchText}/>
                </div>
            </div>
        );
    }
}

export default App;
