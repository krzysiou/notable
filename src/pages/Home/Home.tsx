import { invoke } from '@tauri-apps/api';
import React, { useState } from 'react';

import { HomeStyled } from './Home.styles';
import reactLogo from '../../assets/react.svg';

const Home: React.FC = () => {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <HomeStyled>
      <div className="container">
        <div className="row">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet Me</button>
        </form>
        <p>{greetMsg}</p>
      </div>
    </HomeStyled>
  );
};

export { Home };
