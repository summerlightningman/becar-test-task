import styled from "styled-components";
import {FooterProps} from "../../types";

const footer = styled.footer<FooterProps>`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.contentPosition === 'right' ? 'flex-end' : 'flex-start'};
`;

export default footer