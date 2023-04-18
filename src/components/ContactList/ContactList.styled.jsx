import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 10px 20px;

  border-radius: 5px;
  color: #fff;
  background: rgb(223, 225, 235);
`;
