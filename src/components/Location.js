import React, { Component } from 'react';
import LocationItem from './LocationItem';

class Location extends Component {
	constructor(props){
		super(props)
		this.state = {
			showEdit: false,
			editName: props.location['name']
		}
	}

	toggleEdit = () => {
		const showEdit = this.state.showEdit
		if(this.state.showEdit){
			this.props.renameLocation(this.props.index, this.state.editName)
		}
		this.setState({showEdit: !showEdit})
	}

	handleChange = (event) => {
		this.setState({editName: event.target.value})
	}

	render() {
		const {index, location, deleteLocation, showDelete, increment, decrement, items} = this.props
		const {showEdit, editName} = this.state
		return (
			<table className="u-full-width">
				<thead>
					<tr>
						<td>{showEdit ? (
							<input type="text" value={editName} onChange={this.handleChange} />
						) : location['name']}</td>
						<td></td>
						<td>
							<span onClick={this.toggleEdit}>{showEdit ? 'Save' : 'Edit'}</span>
							{showDelete ? (
								<span> | <span onClick={() => {deleteLocation(index)}}>Delete</span></span>	
							) : null}
						</td>
					</tr>
				</thead>
				<tbody>
					{Object.keys(location['items']).map(key => (
						<LocationItem
							key={key}
							value={location['items'][key]}
							name={items[key]}
							increment={() => {increment(index, key)}}
							decrement={() => {decrement(index, key)}}
							/>
					))}
				</tbody>
			</table>
		)
	}
}

export default Location