import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${({ color, selected }) => css`
    background-color: ${color};
    transform: ${selected ? 'scale(1.2)' : 'scale(1)'};
    box-shadow: ${selected
      ? '0 0 0 4px rgba(0, 0, 0, 0.2)'
      : '0 4px 6px rgba(0, 0, 0, 0.1)'};
  `};

  &:hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const PRIORITY_COLORS = {
  low: 'green',
  medium: 'yellow',
  high: 'red',
};

export const PrioritySelector = ({ priority, onChange }) => {
  const handlePriorityClick = (newPriority) => {
    if (priority !== newPriority) {
      onChange(newPriority);
    }
  };

  return (
    <Wrapper>
      {Object.entries(PRIORITY_COLORS).map(([level, color]) => (
        <Circle
          key={level}
          color={color}
          selected={priority === level}
          onClick={() => handlePriorityClick(level)}
        />
      ))}
    </Wrapper>
  );
};
