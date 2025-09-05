import { useTranslation } from "react-i18next";
import {
  GoDownload,
  GoGlobe,
  GoHome,
  GoMoon,
  GoRocket,
  GoSun,
} from "react-icons/go";
import { useColors } from "src/hooks";
import { useAppStore } from "../../store/app.store";
import { LANGUAGES, PAGES, THEMES } from "../../types";
import { Icon } from "../index";
import { Configuration, Head, LinkButton, Navigation, Wrapper } from "./styles";

const translation = {
  light: "Header.light",
  dark: "Header.dark",
};

export default function Header() {
  const { t } = useTranslation("components");

  const language = useAppStore((state) => state.language);
  const theme = useAppStore((state) => state.theme);

  const setPage = useAppStore((state) => state.setPage);
  const setLanguage = useAppStore((state) => state.setLanguage);
  const setTheme = useAppStore((state) => state.setTheme);

  const colors = useColors();

  const isPt = language === LANGUAGES.PT;
  const isLightTheme = theme === THEMES.LIGHT;

  return (
    <Wrapper>
      <Head>
        <h1>
          <a href="https://github.com/201flaviosilva" target="_blank">
            201flaviosilva
          </a>
        </h1>

        <Configuration>
          <button
            onClick={() => setLanguage(isPt ? LANGUAGES.EN : LANGUAGES.PT)}
          >
            <Icon IconComponent={GoGlobe} size={16} />
            <span>{isPt ? "Portuguese" : "English"}</span>
          </button>

          <button
            onClick={() => setTheme(isLightTheme ? THEMES.DARK : THEMES.LIGHT)}
          >
            <Icon IconComponent={isLightTheme ? GoSun : GoMoon} size={16} />
            <span>
              {t(isLightTheme ? translation.light : translation.dark)}
            </span>
          </button>

          <LinkButton href="https://github.com/201flaviosilva" target="_blank">
            <Icon IconComponent={GoDownload} />
            <span>PDF</span>
          </LinkButton>
        </Configuration>
      </Head>

      <Navigation>
        <ul>
          <li>
            <button onClick={() => setPage(PAGES.HOME)}>
              <span>Home</span>
              <Icon IconComponent={GoHome} size={16} />
            </button>
          </li>
          <li>
            <button onClick={() => setPage(PAGES.GAME)}>
              <span>Lets play a game</span>
              <Icon IconComponent={GoRocket} size={16} />
            </button>
          </li>
        </ul>
      </Navigation>
    </Wrapper>
  );
}
