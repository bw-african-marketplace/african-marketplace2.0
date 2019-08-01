import React from 'react';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Form} from 'semantic-ui-react'

const Contact = () => {
  const TextArea ="text"
  const Checkbox="box"
  const button="botton"
return (
  <div>
    <h1>Contact Us!</h1>
    <p>Want to contact us? Fill out this form and we will get back to you!</p>

    <div>
      <Form action='' method='get' className='contact-form'>


        <div className='form-row'>
          <label for='email'>Email</label>
          <input id='email'
            name='email'
            type='email'
            placeholder='e.g.: jane@example.com' />
        </div>
        <div className='form-row'>
          <label for='full-name'>Name</label>
          <input id='full-name' name='full-name' type='text' />
        </div>

        <div className='form-row'>
          <label for='additional-info'>Inquiry: </label>
          <textarea id='abstract' name='abstract'></textarea>
        </div>
        <Form.Field control={TextArea} label='If You click Sumbit You Agree to Terms' placeholder='' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
      
        <div className='form-row'>
          <button>Submit</button>
        </div>
      </Form>
    </div>

  </div>


);
}
export default Contact;