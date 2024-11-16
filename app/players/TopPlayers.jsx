import React from "react";
import { getTopPlayers } from "../api/players/getPlayersData";
import Image from "next/image";
import Link from "next/link";

async function getData(selectedRegion) {
  let limit = 6;
  let res = await getTopPlayers(limit, selectedRegion);
  return res;
}
export default async function TopPlayers({ region }) {
  let selectedRegion = region || "global";
  let data = await getData(selectedRegion);
  console.log(data);

  return (
    <>
      {data &&
        data.map((player) => (
          <div key={player.tag} className="card my-5 flex flex-col gap-3">
            {/* Player Info */}
            <div className="flex flex-col items-start justify-start gap-x-3 border-b border-gray-400">
              <div className="flex items-center justify-center gap-x-2 text-sm">
                <div className="flex items-center justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{player.rank}.</span>
                </div>
                <h3 className="text-primary">{player.name}</h3>
              </div>
            </div>

            {/* Player Related info */}
            <div className="px-4 flex flex-col gap-2 ">
              {/* Player League Info */}
              <div className="flex items-center justify-between border-b border-gray-400">
                <div className="text-sm  flex items-center justify-start gap-1">
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={player?.league?.iconUrls?.small}
                      alt="player-league"
                    />
                  </span>
                  <span className="text-xs">
                    {player?.league?.name ? (
                      `${player?.league?.name.split(" ")[0]}`
                    ) : (
                      <span className="text-red-600">Not Placed</span>
                    )}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-base">
                    {player.trophies}
                  </span>
                </div>
                <span className="text-xs btn-secondary px-1 hover:text-primary cursor-pointer">
                  <Link href={"/"}>Explore League</Link>
                </span>
              </div>

              {/* Player Clan Info */}
              <div className="text-sm border-b border-gray-400">
                {player?.clan?.name ? (
                  <div className=" flex items-center justify-between gap-1">
                    <div className="flex items-center justify-center gap-1">
                      <Image
                        width={20}
                        height={20}
                        src={player.clan.badgeUrls.small}
                        alt="player-clan"
                      />
                      <span>{player.clan.name}</span>
                    </div>

                    <span className="text-xs btn-secondary px-1 hover:text-primary cursor-pointer">
                      <Link href={"/"}>Explore Clan</Link>
                    </span>
                  </div>
                ) : (
                  <span className="text-red-600">No Clan</span>
                )}
              </div>
            </div>

            <button className="button btn-primary w-full my-2 rounded-md">
              <Link
                href={`/players/${encodeURIComponent(player.tag)}`}
                className="mx-auto"
              >
                Show More
              </Link>
            </button>
          </div>
        ))}

      {!data && <div>Failed to fetch data</div>}
    </>
  );
}
