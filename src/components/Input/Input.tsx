import React, { useState } from 'react';
import './Input.scss';
import {
  getInputVariant,
  getItemShrinkPosition,
  getLabelVariant,
} from './Input.styles';

interface InputProps {
  /**
   * How button to look like
   */
  variant?: 'outlined' | 'standard';
  /**
   * Content of placeholder/label
   */
  label: string;
  /**
   * Just pass onChange={setSomeValue} and you will have value in someValue
   */
  onChange?: (value: string) => void;
  /**
   * Add your classNames
   */
  style?: React.CSSProperties;
  /**
   * Adjust Styles
   */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  variant = 'standard',
  onChange,
  style,
  className,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={` ${getInputVariant(variant)}  ${
        isFocused ? 'focused' : 'outlined-hover'
      }`}
    >
      <label
        className={`${getLabelVariant(variant)}
         ${isFocused || inputValue ? getItemShrinkPosition(variant) : ''}`}
      >
        {label}
      </label>
      <input
        type="text"
        className={`input-main ${className || ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...restProps}
      />
    </div>
  );
};
