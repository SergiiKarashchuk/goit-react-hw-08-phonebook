import styled, { keyframes } from 'styled-components';
import { CgSpinner } from 'react-icons/cg';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  font-weight: 700;
  background: transparent;
  color: #000;
  border: solid 2px #560bad;
  border-radius: 15px;
`;

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
`;
Spinner.defaultProps = {
  size: 40,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const ButtonChange = styled.button`
  padding: 5px;
  width: 40px;
  border-color: #000000;
  border-radius: 50%;
  transition: border-color 0.2s ease;
  &:hover {
    border-color: yellow;
  }
  &:hover svg {
    fill: yellow;
  }
  & svg {
    fill: #000000;
    transition: fill 0.2s ease;
  }
`;

export const ButtonDelete = styled.button`
padding: 5px;
width: 40px;
border: 1px solid;
border-radius: 50%;
cursor: pointer;

&:hover {
  color: tomato;
  background-color: black;
`;

export const Name = styled.span`
  color: #000000;
`;
export const Number = styled.span`
  color: #560bad;
`;
