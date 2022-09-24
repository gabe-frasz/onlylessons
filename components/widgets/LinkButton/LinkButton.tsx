import { LinkButtonProps } from "@core/types";

export const LinkButton = ({ variant, children }: LinkButtonProps) => {
  const commonClasses =
    "p-4 flex justify-center items-center gap-2 text-sm font-bold uppercase rounded transition-colors";

  switch (variant) {
    case "border":
      return (
        <a
          href="#"
          className={`${commonClasses} text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-gray-900`}
        >
          {children}
        </a>
      );

    case "default":
    default:
      return (
        <a
          href="#"
          className={`${commonClasses} bg-green-500 rounded hover:bg-green-700`}
        >
          {children}
        </a>
      );
  }
};
