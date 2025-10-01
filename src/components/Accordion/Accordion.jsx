import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Icon } from "../index";
import { Body, Header, HeaderRightContainer, Wrapper } from "./styles";

export default function Accordion({ title, subtitle, rightText, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Header onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <HeaderRightContainer>
          <p>{rightText}</p>
          <Icon IconComponent={isOpen ? FiPlus : FiMinus} />
        </HeaderRightContainer>
      </Header>
      {isOpen && <Body>{children}</Body>}
    </Wrapper>
  );
}
