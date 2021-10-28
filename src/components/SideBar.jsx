import React from 'react'
import { SiGoogleanalytics} from "react-icons/si"
import { BiNews,BiRocket} from "react-icons/bi"
import { FaWallet} from "react-icons/fa"
import { AiFillSetting,AiFillAppstore} from "react-icons/ai"
import { BsCashStack} from "react-icons/bs"
import { MdAccountCircle} from "react-icons/md"
import { GiCardBurn} from "react-icons/md"

function SideBar() {
    const links=[
        {
            title: 'Game',
            icon:SiGoogleanalytics
        },
        {
            title: 'Buy / Sell',
            icon:AiFillAppstore
        },
        {
            title: 'Settings',
            icon: AiFillSetting
        }
    ]
    return (
        <div className="sidebar">
            <div className="brand">
                <h2>QUINTE<span>250</span></h2>
            </div>
            <ul className="links">
                {
                    links.map((link)=>{
                        return(
                            <li>
                                <a href="#">
                                    {<link.icon/>}
                                    {link.title}
                                </a>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default SideBar
