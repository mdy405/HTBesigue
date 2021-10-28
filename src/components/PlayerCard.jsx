import React from 'react'
import { BsThreeDots } from "react-icons/bs";

import p1 from '../assets/wallet1.png'
import avatar from '../assets/Quinte.png'

function PlayerCard() {
    const playerInfo =[
        {
            name: 'John',
            points:0,
            score: 0,
            maxScore:1000,
            image: p1
        },
        {
            name: 'You',
            points:0,
            score: 0,
            maxScore:1000,
            image: avatar
        }
    ]
    return (
        <div className="playerCards">
            <div className="playerCards__info">
                <h4>Game Info</h4>
                <BsThreeDots/>
            </div>
            <div className="playerCards__container">
                {
                    playerInfo.map((info)=>{
                        return(
                            <div className="playerCard">
                                <img src={info.image} alt=""/>
                                <div className="playerCard__info">
                                    <h3 className="playerCard__info__title">{info.name}</h3>
                                    <div className="playerCard__info__score">
                                        <h4>Score</h4>
                                        <h4>{info.score}</h4>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}

export default PlayerCard
