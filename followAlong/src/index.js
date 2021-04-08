import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false,
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false,
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false,
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false,
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false,
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false,
  },
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries,
      otherVar: 'something',
    };
  }

  // Class methods to update state
  toggleItem = (itemId) => {
    console.log('Toggling item', itemId);
    // map over the groceries array
    // When we find the item clicked, toggle its purchased flag
    const updatedGroceries = this.state.groceries.map((item) => {
      if (itemId === item.id) {
        return { ...item, purchased: !item.purchased };
      }
      return item;
    });
    console.log('updated groceries array', updatedGroceries);
    this.setState({
      ...this.state,
      groceries: updatedGroceries,
    });
  };

  addItem = (itemName) => {
    this.setState({
      ...this.state,
      groceries: [
        ...this.state.groceries,
        {
          name: itemName,
          id: Date.now(),
          purchased: false,
        },
      ],
    });
  };

  clearPurchased = (e) => {
    // filter all items with purchased: true from this.state.groceries
    e.preventDefault();
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter((item) => !item.purchased),
    });
  };

  // Lifecycle methods to handle API calls, event listeners, and other side effects

  // render method to render HTML to the DOM
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          clearPurchased={this.clearPurchased}
          toggleItem={this.toggleItem}
          groceries={this.state.groceries}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
