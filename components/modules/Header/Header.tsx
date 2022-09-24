import { Logo } from "@components/widgets";

export const Header = () => {
  return (
    <header className="fixed w-full py-5 flex justify-center items-center bg-gray-700 border-b border-gray-600 z-10">
      <Logo />
    </header>
  );
};
