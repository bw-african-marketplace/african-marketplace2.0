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
<p></p><p></p>
        <form onSubmit={this.onSubmitHandle}>
          &nbsp;Category: &nbsp;
          <select name="category">
            <option value="AnimalProducts">AnimalProducts </option>
            <option value="Beans"> Beans </option>
            <option value="Fruits"> Fruits </option>
            <option value="CerealMaize"> CerealMaize </option>
            <option value="CerealRice"> CerealRice </option>
            <option value="CerealOther"> CerealOther </option>
            <option value="Peas"> Peas </option>
            <option value="RootTubers"> Root&Tubers </option>
            <option value="Vegitable"> Vegitable </option>
            <option value="Other"> Other </option>
            value={this.state.category}
            onChange={this.onChangeHandle}
          </select>

          {/* <input
            name="category"
            value={this.state.category}
            onChange={this.onChangeHandle}
          /> */}
          &nbsp;Name:&nbsp;
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandle}
          />
          &nbsp;Description:&nbsp;
          <input
            name="description"
            value={this.state.description}
            onChange={this.onChangeHandle}
          />
          &nbsp;Price:&nbsp;
          <input
            name="price"
            value={this.state.price}
            onChange={this.onChangeHandle}
          />
          &nbsp;Location:&nbsp;
          <input
            name="location"
            value={this.state.location}
            onChange={this.onChangeHandle}
          />
          &nbsp;User ID:&nbsp;
          <input
            name="user_id"
            value={this.state.user_id}
            onChange={this.onChangeHandle}
            placeholder="Place User ID Here"
          /> <p></p>
          <button style={{backgroundColor: "#e94c3d", padding: "5px"}}>Submit</button>
        </form>
        
      </div>
    );
  }
}

export default AddForm;