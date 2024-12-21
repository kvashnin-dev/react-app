import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchInput = ({ value, setValue }) => {
  const onInputChange = (event) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={onInputChange}
      placeholder="Поиск..."
    />
  );
};
