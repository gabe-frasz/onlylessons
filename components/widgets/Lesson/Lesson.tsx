import { LessonProps } from "@core/types";
import cn from "classnames";
import { format, isPast } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { CheckCircle, Lock } from "phosphor-react";

export const Lesson = (props: LessonProps) => {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'MMMM' 'dd'th • 'kk'h'mm"
  );

  const isLessonActive = useRouter().query.slug === props.slug;

  return (
    <Link
      href={{
        href: `/event/lessons/[slug]`,
        query: {
          slug: props.slug,
        },
      }}
    >
      <a
        className={cn({
          group: isLessonAvailable,
          "pointer-events-none brightness-50": !isLessonAvailable,
          "pointer-events-none": isLessonActive,
        })}
      >
        <span className="text-gray-300">{availableDateFormatted}</span>

        <div
          className={cn(
            "mt-2 p-4 border border-gray-500 rounded group-hover:border-green-500 transition-colors",
            {
              "bg-green-500": isLessonActive,
            }
          )}
        >
          <header className="flex justify-between items-center">
            {isLessonAvailable ? (
              <span
                className={cn("flex items-center gap-2 text-sm font-medium", {
                  "text-white": isLessonActive,
                  "text-blue-500": !isLessonActive,
                })}
              >
                <CheckCircle size={20} />
                Content available
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Soon
              </span>
            )}

            <span
              className={cn(
                "px-1 py-0.5 text-xs text-white font-bold border rounded",
                {
                  "border-white": isLessonActive,
                  "border-green-300": !isLessonActive,
                }
              )}
            >
              {props.type === "live" ? "LIVE" : "PRACTICAL CLASS"}
            </span>
          </header>

          <strong
            className={cn("mt-5 block", {
              "text-white": isLessonActive,
              "text-gray-200": !isLessonActive,
            })}
          >
            {props.title}
          </strong>
        </div>
      </a>
    </Link>
  );
};
