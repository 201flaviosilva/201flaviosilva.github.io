import { useTranslation } from "react-i18next";
import ProfileImage from "../../../../assets/Profile.png";
import { Section, SkillsList } from "../../../../components";
import { SECTIONS } from "../../Home";

const local = {
  bio: "aboutMe.bio",
};

export default function AboutMe() {
  const { t } = useTranslation("home");

  return (
    <Section key={SECTIONS.ABOUT_ME.key} title="About Me">
      <img src={ProfileImage} alt="Profile Image" width={200} height={200} />
      <SkillsList
        list={[
          "HTML",
          "CSS",
          "JS",
          "TS",
          "React",
          "Python",
          "Godot",
          "SCSS",
          "Redux",
          "RTL",
          "Vitest",
          "Jest",
          "Phaser",
          "PIXI",
          "Canvas",
          "Git",
          "GitHub",
          "English",
          "Portuguese",
          "Spanish",
        ]}
      />
      <p>{t(local.bio)}</p>
    </Section>
  );
}
