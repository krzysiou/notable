import React from 'react';
import { Link } from 'react-router-dom';

import { PageButtonStyled } from './PageButton.styles';

type PageButtonProps = {
  path: string;
  size: number;
  IconComponent: React.FC;
};

const PageButton: React.FC<PageButtonProps> = ({
  path,
  size,
  IconComponent,
}) => {
  return (
    <PageButtonStyled $size={size}>
      <Link to={path}>
        <IconComponent />
      </Link>
    </PageButtonStyled>
  );
};

export { PageButton };
