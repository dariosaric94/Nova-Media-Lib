import React from 'react';
import './Input.scss';

interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input placeholder={placeholder} />;
};
