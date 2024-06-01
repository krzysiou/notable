import React from 'react';

import logo from './../../../../assets/home.svg';

const HomeIcon: React.FC = () => {
  return (
    <img
      src={logo}
      className="logo-home"
      alt="Home logo"
      height="25"
      width="25"
    />
  );
};

export { HomeIcon };
