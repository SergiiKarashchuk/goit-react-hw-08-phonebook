import { Form, Field, Formik } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const FormikWrapper = styled(Formik)``;

export const Title = styled.h3`
  font-size: 30px;
  color: #560bad;
`;

export const FormBox = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
  background: white;
  border-radius: 30px;
  & label {
    display: flex;
    flex-direction: column;
    width: 100%;
    & span {
      margin-bottom: 5px;
      font-size: 20px;
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-align: center;
  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;

export const InputTel = styled(InputName)``;

export const Button = styled.button`
  --color: black;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  cursor: pointer;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: black;
  }

  &:hover:before {
    top: -30px;
    left: -30px;
  }
`;

export const Message = styled.p`
  color: red;
`;
