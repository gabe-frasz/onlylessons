import { gql } from "@apollo/client";
import { NextHead } from "@components/layouts/";
import { Header, Sidebar, Video } from "@components/modules";
import { GET_LESSON_BY_SLUG_QUERY } from "@core/graphql/queries";
import { hygraph } from "@core/services";
import { GetLessonBySlugQueryResponse } from "@core/types";
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
        title={`Ignite Lab | ${lesson.title}`}
        description="some description"
      />

      <Header />

      <main className="mt-[75px] mr-[370px] flex flex-1">
        <Video {...lesson} />

        <Sidebar />
      </main>
    </div>
  );
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { data } = await hygraph.query<GetLessonBySlugQueryResponse>({
    query: GET_LESSON_BY_SLUG_QUERY,
    variables: {
      slug: ctx.params?.slug,
    },
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
