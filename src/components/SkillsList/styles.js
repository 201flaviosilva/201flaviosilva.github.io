import styled from "styled-components";

const SIZE_STYLES = {
  small: {
    padding: "2px 4px",
    fontSize: "0.75rem",
  },
  medium: {
    padding: "4px 8px",
    fontSize: "0.875rem",
  },
  large: {
    padding: "8px 16px",
    fontSize: "1rem",
  },
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Item = styled.li`
  ${({ size }) => `
    padding: ${SIZE_STYLES[size]?.padding};
    font-size: ${SIZE_STYLES[size]?.fontSize};
  `}
  border-radius: 4px;
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ shadow }) => shadow};
`;
