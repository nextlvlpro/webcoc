
import Link from "next/link";
import React from "react";
import TopPlayers from "./TopPlayers";

const Players = () => {
  return (
    <main>
      <h2>Browse Players</h2>
      <div>
        <h3>Top Players</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <TopPlayers/>
        </div>
      </div>
    </main>
  );
};

export default Players;
