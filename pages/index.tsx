import { codeIllustration } from "@/images";
import { NextHead } from "@components/layouts";
import { Footer } from "@components/modules";
import { Logo } from "@components/widgets";
import { BuiltInProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GithubLogo, GoogleLogo } from "phosphor-react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  function handleSignIn(provider: BuiltInProviderType) {
    return async () => {
      try {
        //
        await signIn(provider);

        router.push("/event");
        //
      } catch (error) {
        //
        toast.error("Something went wrong when trying to sign in");
        //
      }
    };
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-blur bg-cover bg-no-repeat">
      <NextHead
        title="Ignite Lab | Subscribe"
        description="Build a complete application, from zero, with React. In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market."
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[654px] h-[575px] bg-react bg-cover bg-no-repeat" />

      <main className="w-full max-w-[1100px] mt-20 mx-auto flex justify-between items-center gap-4 z-10">
        <article className="max-w-[640px] flex flex-col">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build a{" "}
            <strong className="text-blue-500">complete application</strong>,
            from zero, with <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master in practice one of the most used
            technologies and with high demand to access the best opportunities
            on the market.
          </p>
        </article>

        <div className="min-w-[391px] p-8 flex flex-col gap-2 bg-gray-700 border border-gray-500 rounded">
          <strong className="mb-6 block text-2xl">Subscribe for free</strong>

          <button
            type="button"
            onClick={handleSignIn("github")}
            className="mt-4 py-4 flex justify-center items-center gap-4 bg-gray-900 uppercase text-sm font-bold rounded hover:bg-gray-500 transition-colors"
          >
            <GithubLogo size={24} />
            Subscribe with GitHub
          </button>

          <button
            type="button"
            disabled
            className="mt-4 py-4 flex justify-center items-center gap-4 bg-white text-gray-900 uppercase text-sm font-bold rounded hover:bg-gray-200 transition-colors disabled:opacity-25 disabled:hover:bg-white"
          >
            <GoogleLogo size={24} weight="bold" />
            Subscribe with Google
          </button>
        </div>
      </main>

      <Image
        src={codeIllustration}
        alt="code illustration"
        placeholder="blur"
      />

      <Footer />

      <Toaster />
    </div>
  );
}
