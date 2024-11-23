import React, { Suspense } from "react";
import TopPlayers from "./TopPlayers";
import Loading from "@/components/pages/Loading";

const Players = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="topWrapper text-white px-10">
        <h2 className="py-2">Browse Players</h2>
        <div>
          <h3>Top Players</h3>
          <div className="pb-10 pt-2">
            <TopPlayers />
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export default Players;
