import { ReactNode } from "react";

// * contexts
export interface ThemeProviderProps {
  children: ReactNode | ReactNode[];
}

// * layout components
export interface LayoutProps {
  headTitle?: string;
  description?: string;
  center?: boolean;
  className?: string;
  children: ReactNode | ReactNode[];
}

// * module components

// * widget components
