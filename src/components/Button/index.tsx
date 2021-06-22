import React, { ButtonHTMLAttributes } from 'react';

// styles
import * as Style from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Style.Container {...rest}>{children}</Style.Container>;
};

export default Button;
