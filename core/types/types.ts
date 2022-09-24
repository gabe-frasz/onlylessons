// * queries responses
export type GetLessonsQueryResponse = {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
};
export type GetLessonBySlugQueryResponse = {
  lesson: {
    title: string;
    description: string;
    videoId: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    } | null;
  };
};

// * contexts values
export type ThemeContextValue = {
  appTheme: "light" | "dark";
  toggleTheme: () => void;
  setAppThemeToLight: () => void;
  setAppThemeToDark: () => void;
};
