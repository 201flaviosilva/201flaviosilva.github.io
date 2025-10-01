import styled from "styled-components";

export const SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const SIZE_STYLES = {
  small: {
    padding: "2px 4px",
    fontSize: 12,
  },
  medium: {
    padding: "4px 8px",
    fontSize: 16,
  },
  large: {
    padding: "8px 16px",
    fontSize: 20,
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
    span {
        font-size: ${SIZE_STYLES[size]?.fontSize}px;
      }
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border-radius: 4px;
  background-color: ${({ bg }) => bg};
  box-shadow: ${({ shadow }) => shadow};

  span {
    color: ${({ color }) => color};
  }
`;
