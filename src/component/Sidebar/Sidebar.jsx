import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import {BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
    const [selected , setSelected] = useState(0);
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="dashboar logo" />
            <span>
                ad<span>m</span>in
            </span>
        </div>
        <div className="menue">
            {SidebarData.map((item , index)=> {
                return(
                    <div className={selected===index?'menueItem active':'menueItem'}
                        key={index}
                        onClick={()=>setSelected(index)}
                    >
                        <item.icon size="25px"/>
                        <span>{item.heading}</span>
                    </div>
                )
            })}
            <div className="menueItem">
                <BiLogOut size="25px"/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar