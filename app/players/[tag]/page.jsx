
import { getSinglePlayer } from '@/app/api/players/getPlayersData';
import React from 'react'
import SinglePlayerPage from './SinglePlayerPage';

async function fetchData (tag) {
    let res = getSinglePlayer(tag)
    return res 
}

export default async function SinglePlayerInfo({params}) {
    const {tag} = await params
    let playerData = await fetchData(tag)

  return (
    <div>
        <h2>Player Information</h2>
        <div>
          <SinglePlayerPage data={playerData} />
        </div>
    </div>
  )
}
