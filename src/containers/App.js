import React, {Component} from 'react';
import CardList from '../components/CardList'
import {drummers} from '../components/Drummers';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component {
    
    constructor() {
        super();
        this.state = {
            drummers: drummers,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
    const filteredDrummers = this.state.drummers.filter(drummer => {
     return drummer.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if (!drummers.length) {
        return <h1>Loading...</h1>
    } else {
    return (
    <div className="content tc">
        <div className="header">
    <h1>Drummers Hall Of Fame</h1>
    <SearchBox searchChange = {this.onSearchChange} />
    </div> 
    <Scroll> 
        <CardList drummers={filteredDrummers}/>
    </Scroll>
    </div>
    );   
    }
}
}

export default App;