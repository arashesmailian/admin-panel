import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../../Data/Data'
import {BiLogOut , BiMenu} from 'react-icons/bi'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const [selected , setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left:'-60%'
        }
    }
  return (
    <>
        <div className='bars' style={expanded?{left:"60%"} : {left: "5%"}} onClick={()=>setExpanded(!expanded)}>
          <BiMenu />  
        </div>
        <motion.div className="Sidebar"
        variants={sidebarVariants}                                     /* just for mobile view (expandable menu) */
        animate={window.innerWidth<=768?`${expanded}`:''}
        >
            <div className="logo">
                <img src={Logo} alt="dashboard logo" />
                <span>
                    ad<span>m</span>in
                </span>
            </div>
            <div className="menu">
                {SidebarData.map((item , index)=> {
                    return(
                        <div
                            className={selected === index ? 'menuItem active':'menuItem'}
                            key={index}
                            onClick={()=>setSelected(index)}
                        >
                            <item.icon size="25px"/>
                            <span>{item.heading}</span>
                        </div>
                    );
                })}
                <div className="menuItem">
                    <BiLogOut size="25px"/>
                </div>
            </div>
        </motion.div>
    </>
  );
};

export default Sidebar;