"use client";
import { CalendarCheck, CompassIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signOut, useSession } from "next-auth/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoadingPage from "@/components/loading-page";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  const { status, data } = useSession();
  const router = useRouter();

  const sidebar = [
    {
      name: "Explore",
      href: "/dashboard",
      icon: <CompassIcon className="w-5 h-5" />,
    },
    {
      name: "My Bookings",
      href: "/dashboard/my-bookings",
      icon: <CalendarCheck className="w-5 h-5" />,
    },
  ];

  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status === "authenticated") {
    return (
      <>
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-5xl font-bold">
                {data.user.name ? data.user.name[0] : "A"}
              </AvatarFallback>
            </Avatar>
            <h4 className="mx-2  mt-2 font-medium text-gray-800 dark:text-gray-200 capitalize">
              {data.user.name}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              Tourism Management System
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="h-full flex flex-col gap-1">
              {sidebar.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-start"
                  )}
                >
                  {item.icon}
                  <span className="mx-4 font-medium">{item.name}</span>
                </Link>
              ))}
              <AlertDialog>
                <AlertDialogTrigger
                  className={cn(buttonVariants(), "w-full mt-auto")}
                >
                  Log out
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Log out</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to log out? You can always log back
                      in later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Log out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </nav>
          </div>
        </aside>
      </>
    );
  } else {
    return <LoadingPage />;
  }
}
