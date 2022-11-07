import styled from 'styled-components';

export const Forms = styled.form`
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 24px;
`;
export const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
  border: solid 3px green;
  border-radius: 12px;
`;
export const Label = styled.label`
  color: #41ba00;
`;

export const Button = styled.button`
  padding: 4px;
  margin-top: 20px;
  font-size: 14px;
  border-radius: 10px;
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
