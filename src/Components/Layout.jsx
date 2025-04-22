import React from 'react';
import ProgressBar from './ProgressBar';

const Layout = ({ title, children }) => {
  return (
    <div className='layoutContainer' >
      <ProgressBar/>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
