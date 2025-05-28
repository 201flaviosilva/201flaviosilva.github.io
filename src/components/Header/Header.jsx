import {
  GoDownload,
  GoGlobe,
  GoHome,
  GoMoon,
  GoRocket,
  GoSun,
} from "react-icons/go";
import { useAppStore } from "../../store/app.store";
import { PAGES, THEMES } from "../../types";
import { Icon } from "../index";

export default function Header() {
  const { language } = useAppStore((state) => state.language);
  const { theme } = useAppStore((state) => state.theme);

  const { setPage } = useAppStore((state) => state.setPage);
  const { setLanguage } = useAppStore((state) => state.setLanguage);
  const { setTheme } = useAppStore((state) => state.setTheme);

  return (
    <header>
      <div>
        <h1>
          <a href="https://github.com/201flaviosilva">201flaviosilva</a>
        </h1>

        <div>
          <label>
            <span>
              Language <Icon IconComponent={GoGlobe} />
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Portuguese</option>
            </select>
          </label>

          <button
            onClick={() =>
              setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
            }
          >
            {theme === THEMES.LIGHT ? (
              <Icon IconComponent={GoMoon} />
            ) : (
              <Icon IconComponent={GoSun} />
            )}
          </button>

          <a href="https://github.com/201flaviosilva">
            <span>PDF</span>
            <Icon IconComponent={GoDownload} />
          </a>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <button onClick={() => setPage(PAGES.HOME)}>
              <span>Home</span>
              <Icon IconComponent={GoHome} />
            </button>
          </li>
          <li>
            <button onClick={() => setPage(PAGES.GAME)}>
              <span>Lets play a game</span>
              <Icon IconComponent={GoRocket} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
