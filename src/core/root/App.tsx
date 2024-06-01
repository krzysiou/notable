import React from 'react';
import { Outlet } from 'react-router-dom';

import { ConfigProvider } from '../config/ConfigProvider';
import { TitleBar } from '../components/common/TitleBar/TitleBar';

const App: React.FC = () => (
  <ConfigProvider>
    <TitleBar />
    <Outlet />
  </ConfigProvider>
);

export { App };
