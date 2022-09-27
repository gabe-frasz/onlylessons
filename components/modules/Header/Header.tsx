import { Logo } from "@components/widgets";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed w-full p-5  flex justify-center items-center bg-gray-700 border-b border-gray-600 z-10">
      <Logo
        className={router.pathname.includes("/event/lessons/") ? "mx-auto" : ""}
      />

      <button
        onClick={async () => {
          await signOut();
          router.push("/");
        }}
      >
        Unsubscribe
      </button>
    </header>
  );
};
