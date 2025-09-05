import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 8px;
  background: #fafaff;
  border-bottom: 1px solid #e4e7f0;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Configuration = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 4px;

  button {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const LinkButton = styled.a`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 8px;

    li {
      flex: 1;
      display: flex;

      button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 4px;
        gap: 4px;
        border: 1px solid black;
        border-radius: 4px;
      }
    }
  }
`;
