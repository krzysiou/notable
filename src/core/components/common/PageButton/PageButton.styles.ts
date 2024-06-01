import { styled } from 'styled-components';

const PageButtonStyled = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  padding: 2.5px 10px;
  transition: 0.2s;
  border-radius: 3px;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export { PageButtonStyled };
