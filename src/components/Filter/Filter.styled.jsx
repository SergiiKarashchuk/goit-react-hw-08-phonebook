import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & span {
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;
