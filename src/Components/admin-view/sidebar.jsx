import { BellRing, ChartNoAxesCombined, FolderKanban, ListOrdered, MessageCircleQuestion, UserRoundPen, Users } from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { BadgeCheck, LayoutDashboard, ShoppingBasket } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "manage-service",
    label: "Service Management",
    path: "/admin/service-manage",
    icon: <FolderKanban />,
  },
  {
    id: "user-requests",
    label: "User Requests",
    path: "/admin/requests",
    icon: <Users />
  },
  {
    id: "vendor-management",
    label: "Vendors Management",
    path: "/admin/manage-centers",
    icon: <ListOrdered />,
  },
  {
    id: "verification-queue",
    label: "Verification Queue",
    path: "/admin/verification-queue",
    icon: <BadgeCheck />,
  },
  {
    id: "notifications",
    label: "Notifications",
    path: "/admin/notifications",
    icon: <BellRing />
  },
  {
    id: "profile",
    label: "Profile",
    path: "/admin/profile",
    icon: <UserRoundPen />,
  },
  {
    id: "help",
    label: "Help & Support",
    path: "/admin/help",
    icon: <MessageCircleQuestion />,
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

const AdminSideBar = ({ open, setOpen }) => {
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
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItem setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex ">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/admin/dashboard")}
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
         {MenuItem(setOpen={setOpen})} 
      </aside>
    </Fragment>
  );
};

export default AdminSideBar;
