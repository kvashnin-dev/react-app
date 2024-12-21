import React from 'react';
import styled, { css } from 'styled-components';
import { TodoItemContainer } from './TodoItemContainer';
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { PrioritySelector } from './PrioritySelector';
import { useDeleteTodoItem } from '../../data/hooks/useData';
import { useUpdateTodoItem } from '../../data/hooks/useData';

const checkedCss = css`
  color: #b5b5ba;
  text-decoration: line-through;
`;

const Title = styled.span`
  font-size: 15px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: calc(100% - 40px);
  ${({ checked }) => checked && checkedCss};
  transition: color 0.2s ease, text-decoration 0.2s ease;

  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`;

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  padding: 5px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const TodoItem = ({ id, title, checked, priority }) => {
  const { mutate: updateItem } = useUpdateTodoItem();
  const { mutate: deleteItem } = useDeleteTodoItem();

  const handleCheckboxClick = () => {
    updateItem({ id, updates: { isDone: !checked } });
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Вы уверены, что хотите удалить "${title}"?`)) {
      deleteItem(id);
    }
  };

  const handlePriorityChange = (newPriority) => {
    updateItem({ id, updates: { priority: newPriority } });
  };

  return (
    <TodoItemContainer>
      <TodoItemCheckbox checked={checked} onClick={handleCheckboxClick} />
      <Title checked={checked}>{title}</Title>
      <PrioritySelector priority={priority} onChange={handlePriorityChange} />
      <Delete onClick={handleDeleteClick} />
    </TodoItemContainer>
  );
};
