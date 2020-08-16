import React, { Component } from 'react';

class Item extends Component {
	constructor(props){
		super(props)
		this.state = {
			showEdit: false,
			editName: props.item
		}
	}

	toggleEdit = () => {
		const showEdit = this.state.showEdit
		if(this.state.showEdit){
			this.props.renameItem(this.props.index, this.state.editName)
		}
		this.setState({showEdit: !showEdit})
	}

	handleChange = (event) => {
		this.setState({editName: event.target.value})
	}

	render() {
		const {index, item, deleteItem, showDelete} = this.props
		const {showEdit, editName} = this.state
		return (
			<tr>
				<td>{showEdit ? (
					<input type="text" value={editName} onChange={this.handleChange} />
				) : item}</td>
				<td></td>
				<td>
					<span onClick={this.toggleEdit}>{showEdit ? 'Save' : 'Edit'}</span>
					{showDelete ? (
						<span> | <span onClick={() => {deleteItem(index)}}>Delete</span></span>	
					) : null}
				</td>
			</tr>
		)
	}
}

export default Item