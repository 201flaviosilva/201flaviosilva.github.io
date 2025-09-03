import { useTranslation } from "react-i18next";
import { COLORS } from "./labels";
import { Item, List, Title, Wrapper } from "./styles";

export default function SkillsList({ title, list, size = "medium" }) {
  const { t } = useTranslation("components");

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {list.map((skill) => (
          <Item key={skill} size={size} {...COLORS[skill]}>
            {t(COLORS[skill].text)}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
