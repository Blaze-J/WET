import React from 'react'
import NavItem from '../ui/NavItem'
import { FaHome, FaListAlt } from "react-icons/fa";
export default function DashBoardNavBar() {
    const navitem = [{
        icon: <FaHome />,
        title: 'Dashboard',
        path: '/'
    },{
        icon: <FaListAlt />,
        title: 'Manager Faculty',
        path: 'faculty'
    },
    {
        icon: <FaListAlt />,
        title: 'Manager User',
        path:'user'
    }
    ]
    return (
        <div className=' sticky min-h-[100vh] w-[300px] bg-main-gray'>
            <div className='text-white text-center py-5'>
                Logo
            </div>
            <ul className=''>

                {navitem.map(item => {
                    return (
                        <li className='hover:bg-white-gray text-white p-4'>
                            <NavItem icon={item.icon} title={item.title} path={item.path} />
                        </li>
                    )


                })}

            </ul>
        </div>
    )
}