import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [token, setToken] = useState('');

  const handleAuth = async () => {
    try {
      const response = await axios.post('http://104.211.219.98/train/auth', {
        companyName: 'train central',
        clientID: '705e96d2-fc02-4470-821e-a80c6ec24f0c',
        ownerName: 'VaradarajuChandanaPriya',
        ownerEmail: 'vchandana1802@gmail.com',
        rollNo: '3361',
        clientSecret: 'PpTOSyMuzRWOXcuC'
      });
      
      console.log(response.data);
      setToken(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {token ? (
        <h2>Authorization token: {token}</h2>
      ) : (
        <button onClick={handleAuth}>Get Authorization Token</button>
      )}
    </div>
  );
};

export default Auth;