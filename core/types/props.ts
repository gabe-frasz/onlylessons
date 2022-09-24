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
export interface NextHeadProps {
  title: string;
  description: string;
  children?: ReactNode;
}

// * module components
export interface VideoProps {
  title: string;
  description: string;
  videoId: string;
  teacher: {
    name: string;
    bio: string;
    avatarURL: string;
  } | null;
}

// * widget components
export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
export interface LinkButtonProps {
  variant?: "default" | "border";
  children: ReactNode;
}
