import React, { Component } from 'react';

class AddFrom extends Component {
  state = {
    category: '',
    name: "",
    description: '',
    price: '',
    location: ''
  };

  onChangeHandle=(e)=>{
    this.setState({[e.target.name]: e.target.value })
  }
  
  render() {
    return (
      <div>
        <form>
          <input
            name="category"
            value={this.state.category}
            onChange={onChangeHandle}
          />
          <input
            name="name"
            value={this.state.name}
            onChange={onChangeHandle}
          />
          <input
            name="description"
            value={this.state.description}
            onChange={onChangeHandle}
          />
          <input
            name="price"
            value={this.state.price}
            onChange={onChangeHandle}
          />
          <input
            name="location"
            value={this.state.location}
            onChange={onChangeHandle}
          />
        </form>
      </div>
    );
  }
}

export default AddFrom;