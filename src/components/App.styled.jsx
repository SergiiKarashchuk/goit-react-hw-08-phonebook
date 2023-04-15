import styled from 'styled-components';

export const AppBox = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  background-color: gray;
  & h1,
  h2 {
    margin: 0;
    color: #ffffff;
  }
`;
