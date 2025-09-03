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
import { Aside, Sections, Wrapper } from "./styles";

export const SECTIONS = {
  ABOUT_ME: { key: "HOME-ABOUT_ME", locale: "sections.aboutMe" },
  CAREER: { key: "HOME-CAREER", locale: "sections.career" },
  SCHOOL: { key: "HOME-SCHOOL", locale: "sections.school" },
  PERSONAL_PROJECTS: {
    key: "HOME-PERSONAL_PROJECTS",
    locale: "sections.personalProjects",
  },
  VOLUNTEERING: { key: "HOME-VOLUNTEERING", locale: "sections.volunteering" },
  HOBBIES: { key: "HOME-HOBBIES", locale: "sections.hobbies" },
  FOLLOW_ME: { key: "HOME-FOLLOW_ME", locale: "sections.followMe" },
};

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Wrapper>
      <Aside>
        <ul>
          {Object.values(SECTIONS).map((section) => (
            <li key={section.key}>
              <a href={`#${section.key.replace(/\s+/g, "-").toLowerCase()}`}>
                {t(section.locale)}
              </a>
            </li>
          ))}
        </ul>
      </Aside>

      <Sections>
        <AboutMe />
        <Career />
        <School />
        <PersonalProjects />
        <Volunteering />
        <Hobbies />
        <FollowMe />
      </Sections>
    </Wrapper>
  );
}
