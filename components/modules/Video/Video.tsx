import { BigHead } from "@bigheads/core";
import { LinkButton } from "@components/widgets";
import { VideoProps } from "@core/types";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import NextImage from "next/image";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

export const Video = (props: VideoProps) => {
  const { title, description, videoId, teacher } = props;

  return (
    <div className="flex-1">
      {/* player */}
      <div className="bg-black">
        <div className="w-full h-full aspect-video max-w-[1100px] max-h-[60vh] mx-auto">
          <Player>
            <Youtube videoId={videoId} />

            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-8">
        {/* video description and teacher */}
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{title}</h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {description ??
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quis porro aut deserunt, labore optio voluptas, explicabo adipisci blanditiis sequi facere incidunt odio, rerum sit minima accusamus. Iste, excepturi maxime?"}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative w-16 h-16 aspect-square rounded-full -translate-y-1">
                {teacher?.avatarURL ? (
                  <NextImage
                    src={teacher.avatarURL}
                    alt={teacher?.name}
                    layout="fill"
                  />
                ) : (
                  <BigHead
                    accessory="none"
                    body="chest"
                    circleColor="blue"
                    clothing="shirt"
                    clothingColor="black"
                    eyebrows="raised"
                    eyes="happy"
                    faceMask={false}
                    faceMaskColor="blue"
                    facialHair="none"
                    graphic="react"
                    hair="short"
                    hairColor="blonde"
                    hat="none"
                    hatColor="green"
                    lashes={false}
                    lipColor="pink"
                    mask
                    mouth="grin"
                    skinTone="light"
                  />
                )}
              </div>

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                  {teacher?.name ?? "Diego Fernandes"}
                </strong>

                <span className="block text-sm text-gray-200">
                  {teacher?.bio ?? "CTO @Rocketseat"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <LinkButton>
              <DiscordLogo size={24} />
              Discord community
            </LinkButton>

            <LinkButton variant="border">
              <Lightning size={24} />
              Access the challenge
            </LinkButton>
          </div>
        </div>

        {/* bonuses materials */}
        <div className="mt-20 grid grid-cols-2 gap-8">
          <a
            href="#"
            className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors"
          >
            <div className="h-full p-6 flex items-center bg-green-700">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Complementary material</strong>

              <p className="mt-2 text-sm text-gray-200">
                Access the complementary material to acelerate your development
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors"
          >
            <div className="h-full p-6 flex items-center bg-green-700">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Exclusive wallpapers</strong>

              <p className="mt-2 text-sm text-gray-200">
                Download the exclusives Ignite Lab wallpapers and customize your
                machine
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
