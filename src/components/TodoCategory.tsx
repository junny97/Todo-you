import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState } from '../atoms/todoAtom';
import { Categories } from '../interface';

export default function TodoCategory() {
  const [selectedCategory, setCategory] = useRecoilState(categoryState);

  const onClickCategory = (selectedCategory: Categories) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <ButtonContainer>
        <Button
          onClick={() => onClickCategory(Categories.TO_DO)}
          selected={selectedCategory === Categories.TO_DO}
        >
          To Do
        </Button>
        <Button
          onClick={() => onClickCategory(Categories.DOING)}
          selected={selectedCategory === Categories.DOING}
        >
          Doing
        </Button>
        <Button
          onClick={() => onClickCategory(Categories.DONE)}
          selected={selectedCategory === Categories.DONE}
        >
          Done
        </Button>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface ButtonProps {
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 8px 12px;
  border-radius: 50px;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid var(--gray200-color);
  transition: all 0.2s ease;
  margin-left: 10px;
  background-color: ${(props) => (props.selected ? '#b3b3b3' : 'transparent')};
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
  &:hover {
    background-color: #f0f0f0;
  }
`;
