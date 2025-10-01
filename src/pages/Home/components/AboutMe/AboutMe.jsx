import { useTranslation } from "react-i18next";
import ProfileImage from "../../../../assets/Profile.png";
import { SkillsList } from "../../../../components";
import { SECTIONS } from "../../Home";
import { Details, Wrapper } from "./styles";

const local = {
  title: "aboutMe.title",
  bio: "aboutMe.bio",
};

export default function AboutMe() {
  const { t } = useTranslation("home");

  return (
    <Wrapper key={SECTIONS.ABOUT_ME.key} title={t(local.title)}>
      <img src={ProfileImage} alt="Profile Image" width={200} height={200} />
      <Details>
        <SkillsList exclude={["Jest", "Canvas"]} />
        <p>{t(local.bio)}</p>
      </Details>
    </Wrapper>
  );
}
