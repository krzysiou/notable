import { styled } from 'styled-components';

import type { TitleBarConfig } from '../../../config/types';

const TitleBarStyled = styled.div<{ $titleBarConfig: TitleBarConfig }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({ $titleBarConfig }) => $titleBarConfig.titleBarColor};
  height: ${({ $titleBarConfig }) => $titleBarConfig.titleBarHeight}px;

  .buttons-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 20px;

    img {
      aspect-ratio: 1/1;
      height: 25px;
    }
  }
`;

export { TitleBarStyled };
