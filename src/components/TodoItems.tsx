import React from 'react';
import { Categories, IToDo } from '../interface';
import styled from 'styled-components';
import { useRecoilState } from 'recoil'; // Update from useSetRecoilState to useRecoilState
import { todoState } from '../atoms/todoAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function TodoItems({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(todoState);

  const onDelete = () => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prevToDos) => {
      return prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as any } : toDo
      );
    });
  };

  return (
    <>
      <TodoItemList>
        <TodoItemStyle>
          <TodoText>{text}</TodoText>
          <TodoButtonContainer>
            {category !== Categories.DOING && (
              <Button name={Categories.DOING} onClick={onClick}>
                Doing
              </Button>
            )}
            {category !== Categories.TO_DO && (
              <Button name={Categories.TO_DO} onClick={onClick}>
                To Do
              </Button>
            )}
            {category !== Categories.DONE && (
              <Button name={Categories.DONE} onClick={onClick}>
                Done
              </Button>
            )}
            <Button onClick={onDelete}>
              {' '}
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </TodoButtonContainer>
        </TodoItemStyle>
      </TodoItemList>
    </>
  );
}

const TodoItemList = styled.ul`
  margin: 0 70px 10px 0;
`;

const TodoItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  gap: 20px;
  background-color: ${(props) => props.theme.accentColor};
  padding: 10px;
  padding-left: 35px;

  border: 1px solid lightgray;
  border-radius: 15px;
  word-break: break-all;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 18px;
  }

  /* ... */
`;

export const TodoText = styled.span`
  flex-grow: 1;
`;

const TodoButtonContainer = styled.div``;

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 5px;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid var(--gray200-color);
  transition: all 0.2s ease;
  margin-left: 10px;
  &:hover {
    background-color: var(--gray200-color);
  }
`;
