import { IconContext } from "react-icons";
import { Wrapper } from "./styles";

export default function Icon({ IconComponent, size = 24, color, ...props }) {
  return (
    <Wrapper color={color}>
      <IconContext.Provider value={{}} {...props}>
        <IconComponent size={size} />
      </IconContext.Provider>
    </Wrapper>
  );
}
