import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Form = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(process.env.React_App_SERVICE_ID, process.env.React_App_TEMPLATE_ID, form.current, process.env.React_App_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact__form'>
      <div className="contact__form-box">
        <input type="text" name="name" required placeholder='Name'/>
        <input type="email" name="email" required placeholder='Place Your Email'/>
      </div>
      <input type="text" name="subject" required placeholder='Subject' className='contact__form-subject'/>
      <textarea name="message" placeholder='Message'  className='contact__form-message'/>
      <input type="submit" value="Send" required className='contact__form-button'/>
    </form>
  );
};

export default Form