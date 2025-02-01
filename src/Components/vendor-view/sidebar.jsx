import { BellRing, ChartNoAxesCombined, ListCheck, LogOut, Send, User2Icon, UserPen } from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { BadgeCheck, LayoutDashboard, ShoppingBasket } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/vendor/dashboard",
    icon: <LayoutDashboard />,
  },

  {
    id: "new-requests",
    label: "New Requests",
    path: "/vendor/new-requests",
    icon: <ListCheck/>,
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "/vendor/notifications",
    icon: <BellRing />,
  },
  {
    id: "profile",
    label: "Profile",
    path: "/vendor/profile",
    icon: <UserPen />,
  },
  {
    id: "help",
    label: "Help & Support",
    path: "/vendor/help",
    icon: <Send />,
  },

];

function MenuItem({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2 ">
      {adminSidebarMenuItems.map((menuitem) => (
        <div
          key={menuitem.id}
          className="flex text-xl  cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          onClick={() => {
            navigate(menuitem.path);
            setOpen? setOpen(false) : null
          }}
        >
          {menuitem.icon} <span>{menuitem.label}</span>
        </div>
      ))}

   
    </nav>
  );
}

const UserSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full ">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-9 mb-4">
                {" "}
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Vendor Dashboard</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItem setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex ">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/vendor/dashboard")}
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Vendor Dashboard</h1>
        </div>
         {MenuItem(setOpen={setOpen})} 
      </aside>
    </Fragment>
  );
};

export default UserSideBar;
