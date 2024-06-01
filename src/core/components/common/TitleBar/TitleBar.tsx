import React, { useContext } from 'react';

import { TitleBarStyled } from './TitleBar.styles';
import { ConfigContext } from '../../../config/ConfigProvider';
import { HomeIcon } from '../../icons/HomeIcon/HomeIcon';
import { NotesIcon } from '../../icons/NotesIcon/NotesIcon';
import { PageButton } from '../../common/PageButton/PageButton';

const TitleBar: React.FC = () => {
  const {
    config: { titleBarConfig },
  } = useContext(ConfigContext);

  return (
    <TitleBarStyled $titleBarConfig={titleBarConfig}>
      <div className="buttons-container">
        <PageButton path="/" size={25} IconComponent={HomeIcon} />
        <PageButton path="/notes" size={25} IconComponent={NotesIcon} />
      </div>
    </TitleBarStyled>
  );
};

export { TitleBar };
