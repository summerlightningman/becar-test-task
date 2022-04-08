import styled from "styled-components";

const CurrencySelectionItem = styled.li`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  & label {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 15px 0 5px;
  }
  
  & label:hover {
    background: lightgray;
  }
`;

export default CurrencySelectionItem