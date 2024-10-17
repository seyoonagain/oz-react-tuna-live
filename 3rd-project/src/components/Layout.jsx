import React from 'react';
import './Layout.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <ul className='ul'>
          <li className='li'>
            <a onClick={() => navigate('/')}>Home</a>
          </li>
          <li className='li'>
            <Link to='/contents'>Contents</Link>
          </li>
          <li className='li'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
