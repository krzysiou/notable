import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyled } from '../../styles/Global.styles';
import { ConfigProvider } from '../config/ConfigProvider';
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <GlobalStyled />
      <Router />
    </ConfigProvider>
  </React.StrictMode>,
);
