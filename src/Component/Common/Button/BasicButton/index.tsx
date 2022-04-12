import React from 'react';
import { ButtonWrapper } from './style';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filled: boolean;
  label: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const BasicButton = ({
  filled = false,
  backgroundColor = 'red',
  size = 'medium',
  label = '버튼',
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      filled={filled}
      backgroundColor={backgroundColor}
      size={size}
      {...props}
    >
      {label}
    </ButtonWrapper>
  );
};
