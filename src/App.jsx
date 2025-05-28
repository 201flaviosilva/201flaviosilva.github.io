import "css-free-style/build/reset.min.css";
import { Header, Main } from "./components";
import { Game, Home } from "./pages";
import { useAppStore } from "./store/app.store";
import { PAGES } from "./types";

export default function App() {
  const page = useAppStore((state) => state.page);

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
