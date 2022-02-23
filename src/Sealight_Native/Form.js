import React, { useState } from 'react';
import FormSignup from './SignUp';
import { useHistory } from 'react-router';
import SealightIMG from './SealightIMG.png';


const Form = () => {
  let history = useHistory();

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={SealightIMG} alt='Sealight' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          history.push('/design')
        )}
      </div>
    </>
  );
};

export default Form;