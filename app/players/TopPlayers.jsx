import React from "react";
import { getTopPlayers } from "../api/players/getPlayersData";
import Image from "next/image";
import Link from "next/link";

async function getData(selectedRegion) {
  let limit = 10;
  let res = await getTopPlayers(limit, selectedRegion);
  return res;
}

export default async function TopPlayers({ region }) {
  let selectedRegion = region || "global";
  let data = await getData(selectedRegion);

  return (
    <div className="mx-auto max-w-screen grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
      {data && data.length > 0 ? (
        data.map((player) => (
          <div 
            key={player.tag} 
            className="bg-purple-700 text-white shadow-md rounded-lg overflow-hidden border border-purple-600 transition-all duration-300 hover:shadow-lg"
          >
            {/* Player Rank and Name */}
            <div className="bg-purple-800 p-3 flex items-center justify-between border-b border-purple-600">
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 mr-1 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold mr-2">{player.rank}.</span>
                  <h3 className="font-bold">{player.name}</h3>
                </div>
              </div>
            </div>

            {/* Player Details */}
            <div className="p-4 space-y-3">
              {/* League Info */}
              <div className="flex items-center justify-between border-b pb-3 border-purple-600">
                <div className="flex items-center space-x-2">
                  {player?.league?.iconUrls?.tiny && (
                    <Image
                      width={24}
                      height={24}
                      src={player.league.iconUrls.tiny}
                      alt="League Icon"
                      className="rounded"
                    />
                  )}
                  <span className="text-sm">
                    {player?.league?.name ? (
                      player.league.name.split(" ")[0]
                    ) : (
                      <span className="text-red-500">Not Placed</span>
                    )}
                  </span>
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946                       1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{player.trophies}</span>
                  </div>
                </div>
                <Link 
                  href="/" 
                  className="text-xs text-yellow-400 hover:underline"
                >
                  Explore League
                </Link>
              </div>

              {/* Clan Info */}
              <div className="flex items-center justify-between border-b pb-3 border-purple-600">
                {player?.clan?.name ? (
                  <>
                    <div className="flex items-center space-x-2">
                      <Image
                        width={24}
                        height={24}
                        src={player.clan.badgeUrls.small}
                        alt="Clan Badge"
                        className="rounded"
                      />
                      <span className="text-sm">{player.clan.name}</span>
                    </div>
                    <Link 
                      href="/" 
                      className="text-xs text-yellow-400 hover:underline"
                    >
                      Explore Clan
                    </Link>
                  </>
                ) : (
                  <span className="text-red-500 text-sm">No Clan</span>
                )}
              </div>

              {/* Action Button */}
              <Link
                href={`/players/${encodeURIComponent(player.tag)}`}
                className="block w-full"
              >
                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 transition-colors">
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          Failed to fetch data or no players available.
        </div>
      )}
    </div>
  );
}