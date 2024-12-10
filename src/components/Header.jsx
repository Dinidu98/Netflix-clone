import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4rem',
      }}
    >
      <div style={{ height: '5rem' }}>
        <img src={logo} alt="logo" style={{ height: '100%' }} />
      </div>
      <button
        onClick={() => navigate(props.login ? '/login' : '/signup')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#e50914',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          borderRadius: '0.2rem',
          fontWeight: 'bolder',
          fontSize: '1.05rem',
        }}
      >
        {props.login ? 'Login' : 'SignIn'}
      </button>
    </div>
  );
};

export default Header;
