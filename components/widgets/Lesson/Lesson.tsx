import { LessonProps } from "@core/types";
import Link from "next/link";
import { CheckCircle, Lock } from "phosphor-react";

export const Lesson = (props: LessonProps) => {
  const isLessonAvailable = false;

  return (
    <Link href="#">
      <a>
        <span className="text-gray-300">{props.availableAt.toString()}</span>

        <div className="mt-2 p-4 border border-gray-500 rounded">
          <header className="flex justify-between items-center">
            {isLessonAvailable ? (
              <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                <CheckCircle size={20} />
                Content available
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Content available
              </span>
            )}

            <span className="px-2 py-0.5 text-xs text-white font-bold border border-green-300 rounded">
              {props.type === "live" ? "LIVE" : "PRACTICAL CLASS"}
            </span>
          </header>

          <strong className="mt-5 block text-gray-200">{props.title}</strong>
        </div>
      </a>
    </Link>
  );
};
