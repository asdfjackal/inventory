import React, { Component } from 'react';
import Location from './Location';

class LocationList extends Component {
	constructor(props){
		super(props)
		this.state = {
			showDelete: false,
			showCreate: false,
			createName: ''
		}
	}

	toggleShowDelete = () => {
		const showDelete = this.state.showDelete
		this.setState({showDelete: !showDelete})
	}

	toggleShowCreate = () => {
		const showCreate = this.state.showCreate
		this.setState({showCreate: !showCreate})
	}

	handleChange = (event) => {
		this.setState({createName: event.target.value})
	}

	createItem = () => {
		this.props.addLocation(this.state.createName)
		this.setState({
			createName: '',
			showCreate: false
		})
	}

	render() {
		const {renameLocation, deleteLocation, locations, items, increment, decrement} = this.props
		const {showDelete, showCreate, createName} = this.state
		return(
			<div>
				<p>
					<span onClick={this.toggleShowCreate}>Create</span> | <span onClick={this.toggleShowDelete}>Delete</span>
				</p>
				{showCreate ? (
					<div>
						<input type="text" value={createName} onChange={this.handleChange} /> | <span onClick={this.createItem}>Create</span>
					</div>
				) : null}				
				{Object.keys(locations).map((key) => (
							<Location 
								key={key}
								index={key}
								location={locations[key]}
								items={items}
								renameLocation={renameLocation}
								deleteLocation={deleteLocation}
								showDelete={showDelete}
								decrement={decrement}
								increment={increment}/>
						))}
			</div>
		)
	}
}

export default LocationList