import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function LoadingOne() {
  return (
    <div className="w-full  mx-auto px-8 py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1].map((item) => (
          <div 
            key={item} 
            className="bg-purple-700 text-white shadow-md rounded-lg overflow-hidden border border-purple-600 transition-all duration-300 hover:shadow-lg w-full"
          >
            {/* Rank and Name Skeleton */}
            <div className="bg-purple-800 p-3 flex items-center justify-between border-b border-purple-600">
              <Skeleton className="h-6 w-4/4 bg-purple-600" />
            </div>

            {/* Player Details Skeleton */}
            <div className="p-4 space-y-3">
              {/* League Info Skeleton */}
              <div className="flex items-center justify-between border-b pb-3 border-purple-600">
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-6 h-6 rounded bg-purple-600" />
                  <Skeleton className="h-4 w-24 bg-purple-600" />
                </div>
                <Skeleton className="h-4 w-20 bg-purple-600" />
              </div>

              {/* Clan Info Skeleton */}
              <div className="flex items-center justify-between border-b pb-3 border-purple-600">
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-6 h-6 rounded bg-purple-600" />
                  <Skeleton className="h-4 w-32 bg-purple-600" />
                </div>
                <Skeleton className="h-4 w-20 bg-purple-600" />
              </div>

              {/* Action Button Skeleton */}
              <Skeleton className="w-full h-10 bg-purple-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}