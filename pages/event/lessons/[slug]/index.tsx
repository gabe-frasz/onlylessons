import { gql } from "@apollo/client";
import { NextHead } from "@components/layouts/";
import { Footer, Header, Sidebar, Video } from "@components/modules";
import {
  LessonBySlugDocument,
  LessonBySlugQuery,
  LessonBySlugQueryVariables,
} from "@core/graphql/generated";
import { hygraph } from "@core/services";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export default function LessonPage({
  lesson,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="min-h-screen flex flex-col">
      <NextHead
        title={`Ignite Lab | ${lesson?.title}`}
        description="some description"
      />

      <Header />

      <main className="flex-1 mt-[75px] mr-[370px] flex flex-col">
        <Video
          title={lesson?.title!}
          description={lesson?.description!}
          videoId={lesson?.videoId!}
          teacher={lesson?.teacher!}
        />

        <Sidebar />

        <Footer />
      </main>
    </div>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { data } = await hygraph.query<LessonBySlugQuery>({
    query: LessonBySlugDocument,
    variables: {
      slug: ctx.params?.slug,
    } as LessonBySlugQueryVariables,
  });

  return {
    props: {
      lesson: data.lesson,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await hygraph.query<{ lessons: { slug: string }[] }>({
    query: gql`
      query {
        lessons {
          slug
        }
      }
    `,
  });

  const parsedSlugs = data.lessons.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: parsedSlugs,
    fallback: false,
  };
};
