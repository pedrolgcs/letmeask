import React, { ButtonHTMLAttributes } from 'react';

// styles
import * as Style from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isOutlined = false,
  ...rest
}) => {
  return <Style.Container isOutlined={isOutlined} {...rest}>{children}</Style.Container>;
};

export default Button;
