import { Accordion, SKILL_SIZES, SkillsList } from "../../../../components";
import { SECTIONS } from "../../Home";
import { Wrapper } from "./styles";

export default function Career() {
  return (
    <Wrapper key={SECTIONS.CAREER.key} title="Career">
      Career
      <Accordion
        title="It Sector"
        subtitle="Front-End"
        rightText="2024-Present"
      >
        It Sector
      </Accordion>
      {/* Mindera */}
      <Accordion title="Mindera" rightText="2020-2024">
        <SkillsList
          size={SKILL_SIZES.small}
          list={[
            "SCSS",
            "JS",
            "TS",
            "React",
            "Redux",
            "StyledComponents",
            "RTL",
            "Jest",
            "Phaser",
            "PIXI",
            "Git",
            "English",
          ]}
        />
        <p>Description</p>
        <Accordion
          title="Mindera School"
          subtitle="Ensino"
          rightText="2022-2024"
        >
          <SkillsList
            size={SKILL_SIZES.small}
            list={[
              "HTML",
              "CSS",
              "SCSS",
              "JS",
              "TS",
              "React",
              "Redux",
              "Git",
              "GitHub",
              "Java",
            ]}
          />
          <p>Description</p>
        </Accordion>
        <Accordion
          title="FarFetch/NGG"
          subtitle="Front-End"
          rightText="2023-2024"
        >
          <SkillsList
            size={SKILL_SIZES.small}
            list={[
              "React",
              "Redux",
              "TS",
              "Jest",
              "RTL",
              "Storybook",
              "CMS",
              "Kanban",
              "Git",
              "GitLab",
            ]}
          />
          <p>Description</p>
        </Accordion>
        <Accordion title="VRAI/Heat" subtitle="Front-End" rightText="2022-2023">
          <SkillsList
            size={SKILL_SIZES.small}
            list={[
              "React",
              "TS",
              "StyledComponents",
              "Recharts",
              "Git",
              "GitHub",
            ]}
          />
          <p>Description</p>
        </Accordion>
        <Accordion
          title="Mindera Gaming"
          subtitle="Game Dev"
          rightText="2020-2022"
        >
          <SkillsList
            size={SKILL_SIZES.small}
            list={[
              "JS",
              "TS",
              "React",
              "Three",
              "Fabric",
              "PIXI",
              "Canvas",
              "Phaser",
              "Git",
              "GitHub",
              "Bitbucket",
            ]}
          />
          <p>Description</p>
        </Accordion>
      </Accordion>
      {/* PC Recover */}
      <Accordion
        title="PC Recover"
        subtitle="Técnico Informático"
        rightText="20219 (400 Horas)"
      >
        <SkillsList
          size={SKILL_SIZES.small}
          list={["GeneralTI", "SoftSkills"]}
        />
        <p>Description</p>
        <div>
          <a href="https://www.pcrecover.pt/" target="_blank">
            Official Website
          </a>
        </div>
      </Accordion>
    </Wrapper>
  );
}
