import React from 'react';

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItem: '',
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    this.setState({
      ...this.state,
      newItem: e.target.value,
    });
  };

  // class property to submit form
  submitItem = (e) => {
    e.preventDefault(); // avoid a total refresh of the app (default HTML form behavior on submit)
    // pass this.state.newItem into a method that updates application-level state
    this.props.addItem(this.state.newItem);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type='text'
          name='item'
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
