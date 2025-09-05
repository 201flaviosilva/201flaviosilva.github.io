import "css-free-style/build/reset.min.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Header, Main } from "./components";
import { Game, Home } from "./pages";
import { useAppStore } from "./store/app.store";
import { PAGES } from "./types";

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1024px;
  min-height: 100vh;
  background: #ffffff;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafaff;
`;

export default function App() {
  const { i18n } = useTranslation();

  const page = useAppStore((state) => state.page);
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          {PAGES.HOME === page && <Home />}
          {PAGES.GAME === page && <Game />}
        </Main>
      </Container>
    </Wrapper>
  );
}
