import React from 'react';

import logo from './../../../../assets/notes.svg';

const NotesIcon: React.FC = () => {
  return (
    <img
      src={logo}
      className="logo-notes"
      alt="Notes logo"
      height="25"
      width="25"
    />
  );
};

export { NotesIcon };
