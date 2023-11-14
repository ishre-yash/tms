import { Metadata } from "next";
import Sidebar from "./sidebar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="flex h-screen bg-white container px-0">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <section className="flex-shrink-0 h-[52px] border-b border-gray-200 flex items-center justify-between px-4 md:hidden">
            <div className="flex items-center space-x-4">
              <h1 className="text-lg font-medium text-gray-900">TMS</h1>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"}>
                  <MenuIcon className="w-6 h-6 text-gray-500" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-fit">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </section>
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 md:mb-0 p-4 rounded-md">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
