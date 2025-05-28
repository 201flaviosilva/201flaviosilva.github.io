import { Wrapper } from "./styles";

export default function Icon({ IconComponent, size = 24, ...props }) {
  return (
    <Wrapper>
      <IconComponent size={size} {...props} />
    </Wrapper>
  );
}
