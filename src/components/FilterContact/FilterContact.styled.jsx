import styled from 'styled-components';

export const Input = styled.input`
  width: 360px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  border: solid 1px green;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 0px 20px;
  color: green;
  ::placeholder {
    color: green;
    padding: 5px 10px;
  }
  :active {
    border: border: solid 3px green;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  :focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  :focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  :focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
