import { ThemeContext } from "@core/contexts";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
