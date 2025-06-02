import { useTranslation } from "react-i18next";
import {
  AboutMe,
  Career,
  FollowMe,
  Hobbies,
  PersonalProjects,
  School,
  Volunteering,
} from "./components";
import { Wrapper } from "./styles";

export const SECTIONS = {
  ABOUT_ME: { key: "HOME-ABOUT_ME", locale: "aboutMe" },
  CAREER: { key: "HOME-CAREER", locale: "career" },
  SCHOOL: { key: "HOME-SCHOOL", locale: "school" },
  PERSONAL_PROJECTS: {
    key: "HOME-PERSONAL_PROJECTS",
    locale: "personalProjects",
  },
  VOLUNTEERING: { key: "HOME-VOLUNTEERING", locale: "volunteering" },
  HOBBIES: { key: "HOME-HOBBIES", locale: "hobbies" },
  FOLLOW_ME: { key: "HOME-FOLLOW_ME", locale: "followMe" },
};

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Wrapper>
      <aside>
        <ul>
          {Object.values(SECTIONS).map((section) => (
            <li key={section.key}>
              <a href={`#${section.key.replace(/\s+/g, "-").toLowerCase()}`}>
                {t(section.locale)}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <AboutMe />
      <Career />
      <School />
      <PersonalProjects />
      <Volunteering />
      <Hobbies />
      <FollowMe />
    </Wrapper>
  );
}
