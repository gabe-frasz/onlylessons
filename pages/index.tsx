import { Layout } from "@components/layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout center>
      <main className="prose">
        <h1>Next.js app with bash scripts</h1>

        <p>Hello there!</p>
      </main>
    </Layout>
  );
};

export default Home;
