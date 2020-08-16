import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
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
		this.props.addItem(this.state.createName)
		this.setState({
			createName: '',
			showCreate: false
		})
	}

	render() {
		const {renameItem, deleteItem, items} = this.props
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
				<table className="u-full-width">
					<tbody>
						{Object.keys(items).map((key) => (
							<Item 
								key={key}
								index={key}
								item={items[key]}
								renameItem={renameItem}
								deleteItem={deleteItem}
								showDelete={showDelete}/>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ItemList