import React, { useState } from 'react';
import { TodoItemsContainer } from './TodoItemsContainer';
import { NewTodoItem } from '../TodoItem/NewTodoItem';
import { TodoItem } from '../TodoItem/TodoItem';
import { useData } from '../../data/hooks/useData';
import { SearchInput } from './components/SearchInput';
import styled from 'styled-components';

const SortButton = styled.button`
  padding: 8px 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TodoItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const { data: todoItems, isLoading } = useData();

  if (!todoItems || isLoading) {
    return <TodoItemsContainer>Загрузка данных...</TodoItemsContainer>;
  }

  const sortedTodoItems = [...todoItems].sort((a, b) => {
    if (!isSorted) return 0;
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
  });

  const filteredBySearchItems = sortedTodoItems.filter((todoItem) => {
    const clearedTodoItemTitle = todoItem.title.trim().toLowerCase();
    const clearedSearchValue = searchValue.trim().toLowerCase();
    return clearedTodoItemTitle.includes(clearedSearchValue);
  });

  const todoItemsElements = filteredBySearchItems.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      title={item.title}
      checked={item.isDone}
      priority={item.priority}
    />
  ));

  const toggleSort = () => setIsSorted(!isSorted);

  return (
    <TodoItemsContainer>
      <SortButton onClick={toggleSort}>
        {isSorted ? 'Отключить сортировку' : 'Сортировать по приоритету'}
      </SortButton>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  );
};
