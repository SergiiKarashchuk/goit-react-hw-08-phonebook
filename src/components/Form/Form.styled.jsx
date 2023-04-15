import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  width: 300px;
  background: white;
  border-radius: 5px;
  & label {
    display: flex;
    flex-direction: column;
    width: 100%;
    & span {
      margin-bottom: 15px;
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  margin-bottom: 10px;

  line-height: 40px;
  border-width: 1px;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
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
