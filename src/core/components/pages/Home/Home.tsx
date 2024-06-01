import React, { useContext } from 'react';

import { HomeStyled } from './Home.styles';
import { ConfigContext } from '../../../config/ConfigProvider';

const Home: React.FC = () => {
  const { updateConfig } = useContext(ConfigContext);

  return (
    <HomeStyled>
      <div className="container">
        <button
          onClick={() =>
            updateConfig({ titleBarConfig: { titleBarColor: '#ffffff' } })
          }
        >
          Change title color
        </button>
      </div>
    </HomeStyled>
  );
};

export { Home };
