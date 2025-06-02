import { Section } from "../../../../components";
import { SECTIONS } from "../../Home";

export default function AboutMe() {
  return (
    <Section key={SECTIONS.ABOUT_ME.key} title="About Me">
      <p>AboutMe</p>
    </Section>
  );
}
