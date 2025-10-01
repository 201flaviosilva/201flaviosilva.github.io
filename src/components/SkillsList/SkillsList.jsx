import { useTranslation } from "react-i18next";
import { Icon } from "../index";
import { ALL_SKILLS, SKILLS } from "./skills";
import { Item, List, SIZE_STYLES, SIZES, Title, Wrapper } from "./styles";

export default function SkillsList({
  title,
  list = ALL_SKILLS,
  exclude = [],
  size = SIZES.medium,
}) {
  const { t } = useTranslation("components");

  function getFilteredSkills(excluded) {
    return list.filter((skill) => !excluded.includes(skill));
  }

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {getFilteredSkills(exclude).map((skill) => (
          <Item key={skill} size={size} {...SKILLS[skill]}>
            <Icon
              IconComponent={SKILLS[skill].icon}
              color={SKILLS[skill].color}
              size={SIZE_STYLES[size].fontSize}
            />
            <span>{t(SKILLS[skill].text)}</span>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
