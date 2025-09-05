import { COLORS } from "src/theme";
import { useAppStore } from "../../store/app.store";

export function useColors() {
  const theme = useAppStore((state) => state.theme);
  return COLORS[theme];
}
