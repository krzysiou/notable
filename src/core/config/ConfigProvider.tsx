import React, { createContext, useCallback, useState } from 'react';
import { merge, cloneDeep } from 'lodash-es';

import type { Config, DeepPartial } from './types';

import { defaultConfig } from './default-config';

type ConfigContext = {
  config: Config;
  updateConfig: (updatedConfig: DeepPartial<Config>) => void;
};

type ConfigProviderProps = {
  children: React.ReactNode;
};

const ConfigContext = createContext<ConfigContext>({
  config: defaultConfig,
  updateConfig: () => {},
});

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  const updateConfig = useCallback(
    (updatedConfig: DeepPartial<Config>) =>
      setConfig((previousConfig) =>
        merge(cloneDeep(previousConfig), updatedConfig),
      ),
    [],
  );

  const value = { config, updateConfig };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export { ConfigProvider, ConfigContext };
