import React, { Component } from 'react';


class AddForm extends Component {
  state = {
    category: '',
    name: '',
    description: '',
    price: '',
    location: '',
    URL: '',
    user_id: '',
  };

  onChangeHandle=(e)=>{
    this.setState({[e.target.name]: e.target.value })
  }


 onSubmitHandle=(e)=>{
  e.preventDefault();
  this.props.getItems(this.state)
  setTimeout(function(){ document.location.reload();}, 900)
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle}>
          
          Category:
          <input
            name="category"
            value={this.state.category}
            onChange={this.onChangeHandle}
          />
          Name:
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandle}
          />
          Description:
          <input
            name="description"
            value={this.state.description}
            onChange={this.onChangeHandle}
          />
          Price:
          <input
            name="price"
            value={this.state.price}
            onChange={this.onChangeHandle}
          />
          Location:
          <input
            name="location"
            value={this.state.location}
            onChange={this.onChangeHandle}
          />
          User ID:
          <input
            name="user_id"
            value={this.state.user_id}
            onChange={this.onChangeHandle}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddForm;