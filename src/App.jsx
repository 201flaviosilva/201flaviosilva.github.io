import "css-free-style/build/reset.min.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header, Main } from "./components";
import { Game, Home } from "./pages";
import { useAppStore } from "./store/app.store";
import { PAGES } from "./types";

export default function App() {
  const { i18n } = useTranslation();

  const page = useAppStore((state) => state.page);
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <>
      <Header />
      <Main>
        {PAGES.HOME === page && <Home />}
        {PAGES.GAME === page && <Game />}
      </Main>
    </>
  );
}
