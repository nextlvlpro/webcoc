"use client";

import Image from "next/image";
import React, { Suspense } from "react";

// Shadcn imports

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { toast } from "sonner";

//Component imports
import Link from "next/link";

export default function SinglePlayerPage({ data }) {
  const {
    tag,
    name,
    expLevel,
    trophies,
    bestTrophies,
    donations,
    donationsReceived,
    clan,
    league,
    legendStatistics,
    townHallLevel,
    builderHallLevel,
    warStars,
    attackWins,
    defenseWins,
    labels,
    role,
    warPreference,
  } = data;
  // console.log(JSON.stringify(data));
  console.log(data);

  return (
    <div className="container mx-auto px-4 py-5">
      <Header
        data={{
          name,
          league,
          expLevel,
          trophies,
          bestTrophies,
          legendStatistics,
          tag,
          clan,
          townHallLevel,
          builderHallLevel,
          warStars,
          attackWins,
          defenseWins,
          labels,
          role,
          warPreference,
        }}
      />
    </div>
  );
}

function Header({ data }) {
  const {
    name,
    league,
    legendStatistics,
    expLevel,
    trophies,
    bestTrophies,
    tag,
    clan,
    townHallLevel,
    builderHallLevel,
    warStars,
    attackWins,
    defenseWins,
    labels,
    role,
    warPreference,
  } = data;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(tag)
      .then(() => {
        toast.success("Copied to clipboard: " + tag);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      {/* basic info */}

      {/* Basic Info */}
      <div className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-purple-300 to-purple-600 rounded-xl shadow-lg overflow-hidden">
        {/* League Icon */}
        <div className="flex justify-center py-6 px-3">
          <div className="relative">
            <Image
              src={league.iconUrls.medium}
              alt={`${name}'s league icon`}
              width={200}
              height={200}
              priority={true}
              className="rounded-full shadow-lg transform transition-transform hover:scale-105 bg-purple-500 shadow-zinc-600"
            />
            <div className="absolute bottom-0 right-0 bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold">
              Level {expLevel}
            </div>
          </div>
        </div>

        {/* Player Details */}
        <div className="flex flex-col sm:flex-row">
          {/* basic details */}
          <div className="h-[230px] text-white space-y-2 p-2 my-2 flex flex-col items-center justify-center md:items-start ">
            <div className="text-xs flex items-center justify-start">
              <div>{tag}</div>
              <button onClick={() => copyToClipboard(tag)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EAB308"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <h1 className="sm:text-3xl text-lg font-bold">{name}</h1>
              {/* Rank Badge */}
              {legendStatistics?.currentSeason?.rank && (
                <div className="flex items-center bg-yellow-500 text-black rounded-full px-3 py-1 space-x-1">
                  <span className="font-semibold flex items-center justify-center">
                    <span className="text-xl">#</span>
                    {legendStatistics.currentSeason.rank}
                  </span>
                </div>
              )}
            </div>

            {/* Trophy and Best Trophy Information */}
            <div className="flex space-x-4 text-sm px-2">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EAB308"
                  className="size-6 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>{trophies} Trophies</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#EAB308"
                  className="size-6 text-yellow-600"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>

                <span>Best: {bestTrophies}</span>
              </div>
            </div>

            {/* clan info */}
            <div className="flex items-center justify-between border-purple-600 px-2 gap-2">
              {clan?.name ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Image
                      width={24}
                      height={24}
                      src={clan.badgeUrls.small}
                      alt="Clan Badge"
                      className="rounded"
                    />
                    <span className="text-sm">{clan.name}</span>
                  </div>
                  <Link
                    href="/"
                    className="text-xs bg-yellow-400 hover:underline p-1 rounded-md text-black"
                  >
                    Clan Info
                  </Link>
                </>
              ) : (
                <span className="text-red-500 text-sm">No Clan</span>
              )}
            </div>

            <div className="px-3 flex gap-x-4 items-center justify-between text-zinc-100">
              <span>TH {townHallLevel}</span> <span>||</span>{" "}
              <span>BH {builderHallLevel}</span>
            </div>

            {/* overview details */}
          </div>
          <Divider />

          {/* overview */}
          <div className=" pl-6 pr-2  py-5 text-white">
            <SecondSection
              loadComp={{
                warStars,
                attackWins,
                defenseWins,
                labels,
                role,
                warPreference,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SecondSection({ loadComp }) {
  const { warStars, attackWins, defenseWins, labels, role, warPreference } =
    loadComp;

  function TownhallInfo() {
    return (
      <div className=" flex items-start justify-start flex-col text-sm font-semibold">
        {/* war starts info */}
        <div className="flex items-center justify-center gap-x-4 mb-2">
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EAB308"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                clipRule="evenodd"
              />
            </svg>
            <span>War Starts</span>
          </div>
          <span>{warStars}</span>
        </div>

        {/* attack info */}
        <div className="flex items-center justify-center gap-x-4 mb-2">
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EAB308"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Attack Won</span>
          </div>
          <span>{attackWins}</span>
        </div>

        {/* defence info */}
        <div className="flex items-center justify-center gap-x-4 mb-2">
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EAB308"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Defence Won</span>
          </div>
          <span>{defenseWins}</span>
        </div>

        {/* war prefrence */}
        <div className="flex items-center justify-center gap-x-4 mb-2">
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EAB308"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                clipRule="evenodd"
              />
            </svg>
            <span>War status</span>
          </div>
          <span>
            {warPreference === "in" ? (
              <span className="px-2 py-1 bg-green-700 rounded-md">in</span>
            ) : (
              <span className="px-2 py-1 bg-red-700 rounded-md">out</span>
            )}
          </span>
        </div>

        {/* clan role*/}
        <div className="flex items-center justify-center gap-x-4 mb-2">
          <div className="flex items-center justify-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#EAB308"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Clan Role :</span>
          </div>
          <span>{role}</span>
        </div>
      </div>
    );
  }

  function BuilderHallInfo() {
    return <div>Builder Hall info</div>;
  }

  return (
    <>
      <div className="flex items-center justify-start gap-x-4 mb-2">
        {labels &&
          labels?.map((labelIcon) => (
            <TooltipProvider key={labelIcon.id}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={labelIcon.iconUrls.small}
                    width={25}
                    height={25}
                    alt={labelIcon.name || "iconlabel"}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{labelIcon.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
      </div>
      <div className="flex sm:flex-row flex-col">
        <TownhallInfo />
        <Divider />
        <BuilderHallInfo />
      </div>
    </>
  );
}

function Divider() {
  return (
    <div className="h-2/2 mx-2 md:border-r-2 border-b-2 md:border-b-0 border-r-0 border-purple-800 "></div>
  );
}
