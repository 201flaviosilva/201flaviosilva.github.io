import { COLORS } from "./labels";

export default function SkillsList({ list }) {
  return (
    <ul>
      {list.map((skill) => (
        <li>{COLORS[skill].text}</li>
      ))}
    </ul>
  );
}
