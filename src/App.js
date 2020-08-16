import React, {Component} from 'react';
import ItemList from './components/ItemList';
import LocationList from './components/LocationList';

class App extends Component{
	constructor(props) {
		super(props);
		var data = {
			itemIndex: 0,
			items: {},
			locations: []
		}
		if (typeof(Storage) !== 'undefined') {
			if(localStorage.getItem('basic-inventory-data')){
				data = JSON.parse(localStorage.getItem('basic-inventory-data'));
			}
		}

		this.state = {
			...data,
			showItems: false
		};
	}

	saveData = () => {
		const {itemIndex, items, locations} = this.state
		const data = {itemIndex, items, locations}
		localStorage.setItem('basic-inventory-data', JSON.stringify(data))
	}

	addItem = (name) => {
		const items = this.state.items
		const itemIndex = this.state.itemIndex
		items[itemIndex] = name
		
		const locations = this.state.locations
		locations.forEach(element => {
			element['items'][itemIndex] = 0
		})

		const newIndex = itemIndex + 1

		this.setState({items, itemIndex: newIndex, locations})
		this.saveData()
	}

	renameItem = (index, name) => {
		const items = this.state.items
		items[index] = name
		this.setState({items})
		this.saveData()
	}

	deleteItem = (index) => {
		const items = this.state.items
		delete items[index]

		const locations = this.state.locations
		locations.forEach(element => {
			delete element['items'][index]
		})
		this.setState({items, locations})
		this.saveData()
	}

	addLocation = (name) => {
		const locations = this.state.locations
		const location = {
			name,
			items: {}
		}
		
		const items = this.state.items
		for (const key in items){
			location['items'][key] = 0
		}
		
		locations.push(location)

		this.setState(locations)
		this.saveData()
	}

	renameLocation = (index, name) => {
		const locations = this.state.locations
		locations[index]['name'] = name
		this.setState(locations)
		this.saveData()
	}

	deleteLocation = (index) => {
		const locations = this.state.locations
		locations.splice(index, 1)
		this.setState(locations)
		this.saveData()
	}

	increment = (locationIndex, itemIndex) => {
		const locations = this.state.locations
		locations[locationIndex]['items'][itemIndex]++
		this.setState(locations)
		this.saveData()
	}

	decrement = (locationIndex, itemIndex) => {
		const locations = this.state.locations
		if(locations[locationIndex]['items'][itemIndex] > 0){
			locations[locationIndex]['items'][itemIndex]--
			this.setState(locations)
			this.saveData()
		}
	}

	setShowItems = (showItems) => {
		this.setState({showItems})
	}

	render(){
		const {items, showItems, locations} = this.state
		return (
			<div className="container">
				<header>
					<br />
					<h1>Basic Inventory</h1>
				</header>
				<hr />
				<main>
					<p>
						<span className={showItems ? '' : 'selected'} onClick={() => {this.setShowItems(false)}}>Locations</span> | <span className={showItems ? 'selected' : ''}  onClick={() => {this.setShowItems(true)}}>Items</span>
					</p>
					<hr />
					{showItems ? (
						<ItemList 
						addItem={this.addItem} 
						renameItem={this.renameItem} 
						deleteItem={this.deleteItem} 
						items={items} />
					) : (
						<LocationList 
						addLocation={this.addLocation} 
						renameLocation={this.renameLocation} 
						deleteLocation={this.deleteLocation} 
						increment={this.increment} 
						decrement={this.decrement} 
						locations={locations}
						items={items}/>
					)}
				</main>
			</div>
		);
	}
}

export default App;
