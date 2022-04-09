import styled from "styled-components";

const InputStyled = styled.input`
  margin-left: 10px;
  width: 180px;
  outline: none;
  border: 1px solid darkgrey;
  border-radius: 5px;
  height: 25px;
  padding-left: 5px;
  
  &::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
  }
`;

export default InputStyled