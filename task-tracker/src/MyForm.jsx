import React, { useState } from 'react';
import { submitFormData } from './utils/formUtils';

function MyForm() {
  const [formData, setFormData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFormData(formData)
      .then(() => {
        console.log('Form submitted successfully');
        setFormData('');
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData}
        onChange={(event) => setFormData(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

