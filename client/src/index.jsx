import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import DumpSearch from './components/dumpSearch.jsx'
import DumpList from './components/dumpList.jsx'
import FavePage from './components/favePage.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		dumplingSpots: [],
  		showFavs: false,
  		faves: []
  	}
  	this.searchParent = this.searchParent.bind(this)
  	this.toggleFaves = this.toggleFaves.bind(this)
  	this.getFaves();
  }

  saveFavorite (dumpSpot) {
  	axios.post('/save', {dumpSpot: dumpSpot})
  	.then((response) => {
  		this.getFaves();
  	})
  }

  getFaves () {
  	axios.get('/faves').then((response) => {
  		this.setState({ faves: response.data})});
  }

  searchParent(param) {
  	axios.post('/search', {param:param})
  	.then((response) => {
  		this.setState({
  			dumplingSpots: response.data.businesses
  		})
  		console.log(this.state.dumplingSpots)
  	})
  }

  toggleFaves () {
  	this.setState({
  		showFavs: !this.state.showFavs
  	})
  }


  render () {
  	if (!this.state.showFavs) {
  		return (<div><button onClick={this.toggleFaves}>Show Favorites</button><DumpSearch handleSearch={this.searchParent}/><DumpList save={this.saveFavorite.bind(this)} dumps={this.state.dumplingSpots}/></div>)	
  	} else {
  		return (<div><button onClick={this.toggleFaves}>Show Favorites</button><FavePage faves={this.state.faves}/></div>)
  	}
  }
}

ReactDOM.render(<App />, document.getElementById('app'));