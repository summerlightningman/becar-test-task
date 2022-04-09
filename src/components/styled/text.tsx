import styled from "styled-components";
import {TextProps} from "../../types/text";

const Text = styled.span<TextProps>`
  font-size: ${props => props.fontSize || '48px'};
  font-family: 'Quicksand', sans-serif;
`;

export default Text