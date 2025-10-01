import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 6px 4px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ isOpen }) => isOpen && "border-bottom: 1px solid"}
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Body = styled.div`
  padding: 6px 4px;
`;
