import styled, { keyframes } from 'styled-components';
import { CgSpinner } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';

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
  gap: 10px;
  flex-direction: column;
  align-items: baseline;
  height: 50px;
`;
export const Button = styled.button`
  padding: 5px;
  border: 1px solid;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    color: tomato;
    background-color: black;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
export const Number = styled.span`
  font-size: 14px;
  color: black;
`;

export const UserIcon = styled(FaUserCircle)`
  width: 60px;
`;
UserIcon.defaultProps = {
  size: 40,
};
