import React from 'react'
import Navbar from './Navbar'
import PlayerCard from "./PlayerCard";
import Overview from "./Overview";
import Card from './Card';
import GameGrid from './GameGrid';
function Main() {
    return (
        <div className="app">
            <Navbar/>
            <div className="app__grid">
             <div className="app__grid__1">
                <PlayerCard/>
                <GameGrid/>
                {/*<Card
                    style={{ fontSize: "17pt" }}
                    className={0===1 ? "card-clickable" : "card"}
                    card="C1"
                />
                <Card
                    style={{ fontSize: "17pt" }}
                    className={0===1 ? "card-clickable" : "card"}
                    card="C2"
                />*/}
             </div>
             <div className="app__grid__2">
                 <Overview />
             </div>
            </div>
        </div>
    )
}

export default Main
