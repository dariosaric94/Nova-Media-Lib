import React from 'react';
import './Button.scss';
import { getButtonColor, getButtonVariant } from './Button.styles';

interface ButtonProps {
  /**
   * How button to look like
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * Color variants of the button
   */
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  text: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Text transform to Uppercase
   */
  upperCase?: boolean;
  /**
   * Button takes full available width
   */
  fullWidth?: boolean;
  /**
   * Add your classNames
   */
  className?: string;
  /**
   * Adjust Styles
   */
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  text,
  onClick,
  upperCase,
  fullWidth,
  style,
  className,
  ...restProps
}) => {
  return (
    <button
      className={`button-main ${size} ${getButtonColor(
        color
      )} ${getButtonVariant(variant)} ${className || ''}`}
      style={{
        textTransform: upperCase ? 'uppercase' : 'none',
        width: fullWidth ? '100%' : undefined,
        ...style,
      }}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </button>
  );
};
