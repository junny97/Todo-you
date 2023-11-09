import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from '../atoms/todoAtom';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
import TodoCategory from './TodoCategory';
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <ToDoContainer>
      <Title>TODO You?</Title>
      <TodoCategory />
      <TodoForm />
      {toDos?.map((toDo) => (
        <TodoItems key={toDo.id} {...toDo} />
      ))}
    </ToDoContainer>
  );
}

export default ToDoList;

const Title = styled.h1`
  font-family: 'Pretendard-Bold';
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
