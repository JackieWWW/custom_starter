import React from 'react';

class DumpSearch extends React.Component {

constructor(props) {
	super(props)
	this.state = {
		zip : ''
	}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(e) {
	e.preventDefault()
	this.setState({
		zip: e.target.value
	})
	console.log(this.state.zip)
}

handleSubmit (e) {
	e.preventDefault()
	this.props.handleSearch(this.state.zip)
	this.setState({zip:''})
}



render () {
	return (
		<div> 
		<form> 
		<input type='text' onChange={this.handleChange} value={this.state.zip}/>
		<button onClick={this.handleSubmit}>test</button>
		</form>
		</div>
	)
}



} 




export default DumpSearch