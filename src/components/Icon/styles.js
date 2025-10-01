import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ color }) => `
    * {
    color: ${color}
    }
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`;
