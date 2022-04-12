import { css } from 'styled-components';
import styled from 'styled-components';

interface ButtonWrapperProps {
  filled: boolean;
  backgroundColor: string;
  size: string;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ filled, backgroundColor }) =>
    filled
      ? css`
          background-color: ${backgroundColor};
          color: white;
        `
      : css`
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
          color: #333;
        `};

  ${({ size }) => {
    if (size === 'small') {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    } else if (size === 'medium') {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    } else if (size === 'large') {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
  }};
`;
