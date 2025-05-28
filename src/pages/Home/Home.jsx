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

export const SECTIONS_ENUM = {
  ABOUT_ME: "About Me",
  CAREER: "Career",
  SCHOOL: "School",
  PERSONAL_PROJECTS: "Personal Projects",
  VOLUNTEERING: "Volunteering Jobs",
  HOBBIES: "Hobbies",
  FOLLOW_ME: "Follow Me",
};

export default function Home() {
  return (
    <Wrapper>
      <aside>
        <ul>
          {Object.values(SECTIONS_ENUM).map((section) => (
            <li key={section}>
              <a href={`#${section.replace(/\s+/g, "-").toLowerCase()}`}>
                {section}
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
