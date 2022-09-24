import { useQuery } from "@apollo/client";
import { Lesson } from "@components/widgets";
import { GET_LESSONS_QUERY } from "@core/graphql/queries";
import { GetLessonsQueryResponse } from "@core/types";

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[352px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="mb-6 pb-6 block text-2xl font-bold border-b border-gray-500">
        Lessons timeline
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};