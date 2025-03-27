import React from 'react'
import SidebarRight from './sidebarRight';
import SidebarLeft from './sidebarLeft';
import ChatList from '../ChatList';
import { Outlet } from 'react-router-dom';

const RoomChatLayout = () => {
    return (
        <div className='wrapper '>
            <div className="main flex justify-between">
                <SidebarLeft />
                <div className="container-wrapper flex-grow grid grid-cols-[320px_1fr] h-screen">
                    <div className="container-left">
                        <ChatList/>
                    </div>
                    <div className="container-right w-full">
                        <Outlet/>
                    </div>
                </div>
                <SidebarRight />
            </div>
        </div>
    )
}

export default RoomChatLayout
