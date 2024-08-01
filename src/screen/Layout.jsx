import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom"
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineMenu } from "react-icons/ai"
import { Menu } from 'antd'

const Layout = () => {

    const [collapse, setCollapse] = useState(false)

    const navigate = useNavigate()
    const list_menu = [
        {
            key: "toggleMenu",
            icon: <AiOutlineMenu />,
            label: "hide",
            onClick: () => { setCollapse(prev => !prev) }
        },
        {
            key: "/",
            icon: <AiOutlineDashboard />,
            label: "dashboard",
            onClick: (e) => { navigate("/") }
        },
        {
            key: "/attendances",
            icon: <AiOutlineUser />,
            label: "attendances",
            onClick: () => { navigate("/attendances") }
        },
        {
            key: "/setting",
            icon: <AiOutlineSetting />,
            label: "setting",
            onClick: () => { navigate("/setting") }
        }
    ]

    // mendapatkan search params
    let location = useLocation()

    return (
        <main className={`flex w-[100dvw] h-[100dvh]`}>

            <div className={`h-[100dvh] flex flex-col sticky top-0 left-0`}>

                <Menu
                    defaultSelectedKeys={[location.pathname]}
                    items={list_menu}
                    mode='inline'
                    inlineCollapsed={collapse}
                    className={`h-full ${!collapse && "w-[200px]"}`}
                />
            </div>

            <div className={`flex-[1] h-[100dvh] overflow-y-auto`}>
                <div className='min-h-[200dvh]'>
                    <Outlet />
                </div>
            </div>

        </main>
    )
}

export default Layout
