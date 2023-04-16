import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'



export default function Contact() {

  // setup for emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lnhue05', 'template_2t651mp', form.current, 'N1-LwH_bYp7hXHjIm')
      .then((result) => {
        console.log('Email Sent!');
        setName('');
        setEmail('');
        setMessage('');
        showToast(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // defining states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [toast, showToast] = useState(false);

  // checking if states have changed and setting them to the changed values. If not value then error message
  const handleNameChange = evt => {
    setName(evt.target.value);
  };
  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };
  const handleMessageChange = evt => {
    setMessage(evt.target.value);
  };
  const isNameValid = name !== '';
  const isEmailValid = email !== '';
  const isMessageValid = message !== '';
  const [touchedName, setNameTouched] = useState(false);
  const [touchedEmail, setEmailTouched] = useState(false);
  const [touchedMessage, setMessageTouched] = useState(false);

  // the webpage being returned
  return (
    <div>
      <h2 className='headingPosition'>Contact Me:</h2>
      <div className="container form">
        <div className="row">
          <form ref={form} onSubmit={sendEmail}>
            <div className="col-lg-">
              <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" name='user_name' value={name} onChange={handleNameChange} onBlur={() => setNameTouched(true)} />
                <label for="floatingInput">Name</label>
                <div className='alert'>
                  {touchedName ? (isNameValid ? " " : "Name Required") : null}
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='user_email' value={email} onChange={handleEmailChange} onBlur={() => setEmailTouched(true)} />
                <label for="floatingInput">Email address</label>
                <div className='alert'>
                  {touchedEmail ? (isEmailValid ? " " : "Email Required") : null}
                </div>
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Send me some good news!" id="floatingTextarea2" name='user_message' value={message} onChange={handleMessageChange} onBlur={() => setMessageTouched(true)} ></textarea>
                <label for="floatingTextarea2">Tell me something good!</label>
                <div className='alert'>
                  {touchedMessage ? (isMessageValid ? " " : "Message Required") : null}
                </div>
                <button type="submit" value="Send" className="btn btn-outline-success">Send Message</button>
                {!toast ? null : <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Email Sent! Thanks for reaching out</strong>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}