import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react'


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
    console.log(this.state.category)
    return (
      <div>
<p></p><p></p>
        <form onSubmit={this.onSubmitHandle}>
          &nbsp;<strong>Choose Category:</strong> &nbsp;<br/>
          <select onChange={this.onChangeHandle} value={this.state.category} name="category">
            <option value="AnimalProducts">AnimalProducts </option>
            <option value="Beans"> Beans </option>
            <option value="Fruits"> Fruits </option>
            <option value="CerealsMaize"> CerealMaize </option>
            <option value="CerealsRice"> CerealRice </option>
            <option value="CerealsOther"> CerealOther </option>
            <option value="Peas"> Peas </option>
            <option value="RootsTubers"> RootsTubers </option>
            <option value="Vegetables"> Vegetables </option>
            <option value="Other"> Other </option>
          </select>
          <strong><p>Enter new product info below:</p></strong>
          <Form size='mini' key='mini'>

            <Form.Group widths='equal'>
              <Form.Field name="URL" label='URL' control='input' placeholder='Img URL' value={this.state.URL}
                onChange={this.onChangeHandle}/>
              <Form.Field name="name" label='name' control='input' placeholder='Product' value={this.state.name} 
                onChange={this.onChangeHandle}/>
            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Field name="description" label='description' control='input' placeholder='Description' value={this.state.description}
                onChange={this.onChangeHandle}/>
              <Form.Field name="price" label='price' control='input' placeholder='Price' value={this.state.price}
                onChange={this.onChangeHandle}/>
            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Field name="location" label='location' control='input' placeholder='Location' value={this.state.location}
                onChange={this.onChangeHandle}/>
              <Form.Field name="user_id" label='user_id' control='input' placeholder='User ID' value={this.state.user_id}
                onChange={this.onChangeHandle}/>
            </Form.Group>

            <Button color="red" type='submit'>Submit</Button>
            <Divider hidden />
          </Form>



          {/* &nbsp;Img URL:&nbsp;
          <input
            name="URL"
            value={this.state.URL}
            onChange={this.onChangeHandle}
          />
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
          <button style={{backgroundColor: "#e94c3d", padding: "5px"}}>Submit</button> */}
        </form>

      </div>
    );
  }
}

export default AddForm;