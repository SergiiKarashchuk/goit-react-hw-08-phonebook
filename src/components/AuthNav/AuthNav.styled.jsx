import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  fontweight: 700;
  color: #2a363b;
  &:active {
    color: #e84a5f;
  }
`;
