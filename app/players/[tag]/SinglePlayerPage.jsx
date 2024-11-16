import Image from "next/image";
import React from "react";

//shadcn imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function SinglePlayerPage({ data }) {
  console.log(data);
  const {
    tag,
    name,
    expLevel,
    trophies,
    bestTrophies,
    warStars,
    donations,
    donationsReceived,
    clan,
    league,
    legendStatistics,
  } = data;

  return (
    <>
      <Header
        data={{ name, league, expLevel, trophies, bestTrophies, warStars,legendStatistics }}
      />
    </>
  );
}

function Header({ data }) {
  const { name, league, legendStatistics} = data;

  return (
    <div className="card flex sm:items-start items-center justify-center md:justify-start sm:gap-5 gap-1 ">
      <img
        src={league.iconUrls.medium}
        alt={name}
        className="bg-gray-200 w-[200px] h-[200px] shadow-md rounded-full"
      />
      <div className="flex flex-col gap-4 text-lg bg-primary text-white p-3 rounded">
          <div>
            Rank : {legendStatistics.currentSeason.rank}
          </div>
          <div>
            Name : {name}
          </div>
          <div></div>
      </div>
    </div>
  );
}
