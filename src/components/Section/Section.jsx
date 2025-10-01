import { Wrapper } from "./styles";

export default function Section({ className, title, children }) {
  return (
    <Wrapper id={title.replace(/\s+/g, "-").toLowerCase()}>
      {title && (
        <div>
          <h2>{title}</h2>
        </div>
      )}
      <div className={className}>{children}</div>
    </Wrapper>
  );
}
