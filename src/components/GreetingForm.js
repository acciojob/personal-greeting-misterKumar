// GreetingForm.js
import React, { useState } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>
        <div> Enter your name:</div>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default GreetingForm;
