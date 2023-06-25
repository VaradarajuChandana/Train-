import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://104.211.219.98/train/register', {
        companyName: 'train central',
        ownerName: 'VaradarajuChandanaPriya',
        rollNo: '3361',
        ownerEmail: 'vchandana1802@gmail.com',
        accessCode: 'jOBrNa'
      });
      
      console.log(response.data);
      setRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {registered ? (
        <h2>Successfully registered!</h2>
      ) : (
        <button onClick={handleRegister}>Register</button>
      )}
    </div>
  );
};

export default Register;