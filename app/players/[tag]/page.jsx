import { getSinglePlayer } from "@/app/api/players/getPlayersData";
import React, { Suspense } from "react";
import SinglePlayerPage from "./SinglePlayerPage";
import LoadingOne from "@/components/pages/LodingOne";

async function fetchData(tag) {
  let res = getSinglePlayer(tag);
  return res;
}

export default async function SinglePlayerInfo({ params }) {
  const { tag } = await params;
  let playerData = await fetchData(tag);

  return (
    <Suspense fallback={<LoadingOne/>}>
      <div className="topWrapper">
        <SinglePlayerPage data={playerData} />
      </div>
    </Suspense>
  );
}
