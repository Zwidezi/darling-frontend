import React, { useState } from 'react';
import './index.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>💕 Darling Dating App</h1>
      <p>Token: {token ? 'Logged In' : 'Not Logged In'}</p>
      <button 
        onClick={() => {
          localStorage.setItem('token', 'test-token');
          setToken('test-token');
        }}
        style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}
      >
        Login
      </button>
      {token && (
        <button 
          onClick={() => {
            localStorage.removeItem('token');
            setToken(null);
          }}
          style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', marginLeft: '10px' }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
