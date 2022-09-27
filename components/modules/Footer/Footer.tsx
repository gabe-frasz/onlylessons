import { FooterLogo } from "@components/widgets";

export const Footer = () => {
  return (
    <footer className="w-full px-6 bg-gray-900 text-gray-300">
      <div className="py-6 flex justify-between items-center border-t border-gray-500">
        <FooterLogo />

        <span className="ml-6 mr-auto">Rocketseat - All rights reserved</span>

        <span>Privacy policies</span>
      </div>
    </footer>
  );
};
