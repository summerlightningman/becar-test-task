import styled from "styled-components";

const CurrencySelection = styled.select`
  height: 60px;
  font-size: 48px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0 10px;
  background: none;
  
  & optgroup {
    font-size: 16px;
  }
`;

export default CurrencySelection