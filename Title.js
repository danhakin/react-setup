import React from 'react';

class Title extends React.Component {
	constructor(){
		super();
		this.state = {
			name: 'this is the state name',
		}
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({name: e.target.value});
	}
	render() {
		return (
			<div>
				<Widget name={this.state.name} update={this.update} />
			</div>
		);
	}
}

const Widget = (props) => {
	return (
		<div>
		<input type="text" 
			onChange={props.update}/>
		<h1>{props.name}</h1>
		</div>
	);
}

export default Title