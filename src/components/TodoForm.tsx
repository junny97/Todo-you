import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import { useForm } from 'react-hook-form';
import { IFormData } from '../interface';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, todoState } from '../atoms/todoAtom';
export default function TodoForm() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const setToDos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = ({ toDo }: IFormData) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
    setValue('toDo', '');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewToDoInput
          {...register('toDo')}
          placeholder='당신의 오늘 할 일을 입력해주세요!'
        />
        <Button text='등록하기' />
      </form>
    </>
  );
}
const NewToDoInput = styled.input`
  display: inline-block;
  padding: 10px;
  width: 540px;
  margin-right: 15px;
  /* color: ${(props) => props.theme.accentColor}; */
  color: black;
  border: none;
  background-color: lightgray;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
  font-size: 18px;
  &::placeholder {
    font-size: 16px;
    color: var(--gray-800);
  }
`;
