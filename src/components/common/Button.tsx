import styled from 'styled-components';

interface IButton {
  text: string;
}

export default function Button({ text }: IButton) {
  return <ButtonStyle>{text}</ButtonStyle>;
}

const ButtonStyle = styled.button`
  width: '100%';
  padding: 14px;
  border-radius: 15px;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid var(--gray200-color);
  transition: all 0.2s ease;
  &:hover {
    background-color: var(--gray200-color);
  }
`;
