import styled from 'styled-components';

export const Ul = styled.ul`
  width: 400px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-end;
  flex-direction: column;
`;

export const Li = styled.li`
  margin: 20px;
  color: green;
  align-items: baseline;
  display: flex;
  font-size: 16px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 4px 8px;
  display: block;
  font-size: 18px;
  border-radius: 10px;
  margin-left: 15px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: green;
    background-color: #6ebd79;
    outline: 0;
    text-decoration: none;
  }
`;
