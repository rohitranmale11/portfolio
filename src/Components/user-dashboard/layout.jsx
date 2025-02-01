import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSideBar from "./sidebar";
import UserHeader from "./header";

const UserLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>
        {/* Sidebar */}
        <UserSideBar open={openSidebar} setOpen={setOpenSidebar}/>
        <div className='flex flex-1 flex-col '>
            {/* Header */}
            <UserHeader setOpen={setOpenSidebar}/>

            <main className='flex-1 flex-col flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>

        </div>

    </div>

   
  );
};

export default UserLayout;
