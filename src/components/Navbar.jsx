import React from 'react'
import {VscArrowSwap} from 'react-icons/vsc'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GiAce } from "react-icons/gi";

import avatar from '../assets/Quinte.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="avatar">
                <img src={avatar} alt="" />
                <div className="info">
                    <h4 className="title">M-dy Sparrow</h4>
                     <h6 className="status">Online</h6>
                </div>
            </div>
            <div className="quick">
                <button>
                    <GiAce/>
                    Start a new game
                </button>
            </div>
            <div className="navbar__info">
                <IoMdNotificationsOutline />
                <FiMail />
            <div className="search__bar">
                <input type="text" placeholder="Search" />
                <FaSearch />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
