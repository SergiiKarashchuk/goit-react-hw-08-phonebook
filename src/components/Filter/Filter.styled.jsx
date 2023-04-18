import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & span {
    margin-right: 10px;
    padding: 5px;
    font-size: 20px;
    color: #000;
    background: yellow;
    border-radius: 5px;
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

  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;
