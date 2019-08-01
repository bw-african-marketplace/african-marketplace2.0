import React, { Component } from 'react';


class AddForm extends Component {
  state = {
    category: '',
    name: '',
    description: '',
    price: '',
    location: '',
    URL: '',
  };

  onChangeHandle=(e)=>{
    this.setState({[e.target.name]: e.target.value })
  }


 onSubmitHandle=(e)=>{
  e.preventDefault();
  this.props.getItems(this.state)
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
          
          Category: <input
            name="category"
            value={this.state.category}
            onChange={this.onChangeHandle}
          />
          Name: <input
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandle}
          />
          Description: <input
            name="description"
            value={this.state.description}
            onChange={this.onChangeHandle}
          />
          Price: <input
            name="price"
            value={this.state.price}
            onChange={this.onChangeHandle}
          />
          Location: <input
            name="location"
            value={this.state.location}
            onChange={this.onChangeHandle}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddForm;