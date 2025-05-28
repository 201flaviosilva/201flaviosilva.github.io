import { useState } from "react";

export default function DropDown({ title, subtitle, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div>{isOpen ? "open" : "closed"}</div>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
