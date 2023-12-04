"use client";
import {
  CalendarCheck,
  CalendarDays,
  IndianRupee,
  MapPin,
  Shield,
  User2,
  Utensils,
  Wifi,
} from "lucide-react";
import React from "react";

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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

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
import { cn } from "@/lib/utils";
import axios from "axios";

export default function MyBookingsCard({ data }: { data: any }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <img
          className="pb-4 h-80 bg-cover w-full rounded-t-lg"
          src={data.packageData.image}
          alt={data.packageData.title}
        />
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {data.packageData.title}
            </h5>
          </a>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <CalendarCheck className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {new Date(data.bookingDate).toDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {data.people}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button>View Details</Button>
              </SheetTrigger>
              <SheetContent side={"bottom"} className="h-[85vh]">
                <SheetHeader>
                  <SheetTitle>{data.packageData.title}</SheetTitle>
                  <SheetDescription>
                    Book your slot for {data.packageData.title} package and
                    plane your trip with us.
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[65vh] md:h-[70vh] w-full mt-4">
                  <CardBookingDetails data={data} setOpen={setOpen} />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}

function CardBookingDetails({ data, setOpen }: { data: any; setOpen: any }) {
  const { toast } = useToast();

  const feachers = [
    {
      title: "Free Food Fiesta",
      description:
        "Treat yourself to complimentary gourmet meals with our booking packages. Enjoy a variety of delicious dishes that will make your stay extra special.",
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      title: "Unlimited Wi-Fi Wonderland",
      description:
        "Stay connected hassle-free with our unlimited high-speed Wi-Fi. Whether you're working or sharing your adventures, we've got your internet needs covered.",
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      title: "Local Adventures Made Easy",
      description:
        "Discover the best of the area with our free tourist guide service. Let our experts show you around, providing insider tips and making your stay unforgettable.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Secure Stay Assurance",
      description:
        "Rest easy with our top-notch security features. Your safety is our priority, ensuring a worry-free and secure experience throughout your stay. Enjoy peace of mind as you create lasting memories.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const handleBookingCancel = async () => {
    axios
      .delete(`/api/packages?bookingId=${data.id}`)
      .then((res) => {
        toast({
          title: "Booking Cancelled",
          description: "Your booking has been cancelled successfully.",
        });
        setOpen(false);
      })
      .catch((err) => {
        toast({
          title: "Booking Cancelled",
          description: "Your booking has been cancelled successfully.",
        });
        setOpen(false);
      });
  };

  return (
    <>
      <div className="text-lg font-semibold text-gray-900 my-4">
        Feachers Included
      </div>

      <section className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {feachers.map((feacher, i) => {
          return (
            <div
              key={i}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                {feacher.icon}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {feacher.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feacher.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="text-lg font-semibold text-gray-900 my-4">
        Invoice Details
      </div>

      <Table className="overflow-">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>No of People</TableHead>
            <TableHead>No of Days</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{data.packageData.title}</TableCell>
            <TableCell>{data.bookingDate}</TableCell>
            <TableCell>{data.people}</TableCell>
            <TableCell>{new Date(data.bookingDate).toDateString()}</TableCell>
            <TableCell className="text-right">₹{data.amount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {new Date(data.bookingDate).getTime() > Date.now() && (
        <AlertDialog>
          <AlertDialogTrigger className={cn(buttonVariants(), "mt-4 w-full")}>
            Cancel Booking
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Your booking will be cancelled. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleBookingCancel}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {data.packageData.hotels && (
        <>
          <div className="text-lg font-semibold text-gray-900 my-4">
            Explore Nearby Hotels
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.packageData.hotels.map((p: any, i: any) => {
              return (
                <div
                  className="cursor-pointer rounded-xl bg-gray-100 shadow-lg hover:shadow-xl"
                  key={i}
                >
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={p.image} alt="wallpaper" />

                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <span className="ml-1 text-sm text-muted-foreground">
                        {p.rating}
                      </span>
                    </div>
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="">{p.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.address}
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                      <p>
                        <span className="text-lg font-bold text-orange-500">
                          ₹{p.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /night
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
