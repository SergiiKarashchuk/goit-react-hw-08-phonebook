import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  height: 100vh;
  & h1,
  h2 {
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Text = styled.h2`
  font-size: 20px;
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;
