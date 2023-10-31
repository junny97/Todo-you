import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoSelector } from '../atoms/todoAtom';

import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
import { Categories } from '../interface';

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onClickCategory = (selectedCategory: Categories) => {
    setCategory(selectedCategory);
  };
  console.log(category);

  return (
    <ToDoContainer>
      <Title>TODO You?</Title>
      <ButtonContainer>
        <Button onClick={() => onClickCategory(Categories.TO_DO)}>To Do</Button>
        <Button onClick={() => onClickCategory(Categories.DOING)}>Doing</Button>
        <Button onClick={() => onClickCategory(Categories.DONE)}>Done</Button>
      </ButtonContainer>
      <TodoForm />
      {toDos?.map((toDo) => (
        <TodoItems key={toDo.id} {...toDo} />
      ))}
    </ToDoContainer>
  );
}

export default ToDoList;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 34px;
`;

const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
