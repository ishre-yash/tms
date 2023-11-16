"use client";
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
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

export default function PackageCard({ packagedata }: { packagedata: any }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <a href={packagedata.link}>
          <img
            className="pb-4 h-80 bg-cover w-full rounded-t-lg"
            src={packagedata.image}
            alt={packagedata.title}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {packagedata.title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  if (index < packagedata.rating) {
                    return (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    );
                  }
                })}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
              {packagedata.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ₹{packagedata.price}
            </span>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button>Book Now</Button>
              </SheetTrigger>
              <SheetContent side={"bottom"} className="h-[85vh]">
                <SheetHeader>
                  <SheetTitle>{packagedata.title}</SheetTitle>
                  <SheetDescription>
                    Book your slot for {packagedata.title} package and plane
                    your trip with us.
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[65vh] md:h-[70vh] w-full mt-4">
                  <CardBookingDetails
                    packagedata={packagedata}
                    setOpen={setOpen}
                  />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}

function CardBookingDetails({
  packagedata,
  setOpen,
}: {
  packagedata: any;
  setOpen: any;
}) {
  const { toast } = useToast();

  const [person, setPerson] = React.useState(1);
  const [date, setDate] = React.useState("");
  const [days, setDays] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const onBooking = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      packageId: packagedata.id,
      people: person,
      noOfDays: days,
      bookingDate: date,
    };

    await axios
      .post("/api/packages", data)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Booking Successful",
            description: "Your booking is successful.",
          });
          setIsLoading(false);
          setOpen(false);
        }
      })
      .catch((err: any) => {
        toast({
          title: err.response.data.message,
          description: "Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium text-gray-900">
          Add New Person
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant={"outline"}
            onClick={() => {
              if (person > 1) {
                setPerson(person - 1);
              }
            }}
          >
            -
          </Button>
          <span className="text-lg font-semibold text-gray-900">{person}</span>
          <Button variant={"outline"} onClick={() => setPerson(person + 1)}>
            +
          </Button>
        </div>
      </div>

      <div className="text-lg font-semibold text-gray-900 my-4">
        Select Booking Date
      </div>

      <input
        type="date"
        className="border border-gray-200 rounded-lg shadow-sm p-2 w-full"
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="text-lg font-semibold text-gray-900 my-4">
        Select Booking Days
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-base font-medium text-gray-900">
          Add New Days
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant={"outline"}
            onClick={() => {
              if (days > 1) {
                setDays(days - 1);
              }
            }}
          >
            -
          </Button>
          <span className="text-lg font-semibold text-gray-900">{days}</span>
          <Button variant={"outline"} onClick={() => setDays(days + 1)}>
            +
          </Button>
        </div>
      </div>

      <div className="text-lg font-semibold text-gray-900 my-4">
        Invoice Details
      </div>

      <Table>
        <TableCaption>
          Invoice for {person} person for {days} days of {packagedata.title}{" "}
          package. Booking Date: {new Date(date).toDateString()} . Amount ₹
          {packagedata.price * person * days}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Person</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Days</TableHead>

            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{packagedata.title}</TableCell>
            <TableCell>{person}</TableCell>
            <TableCell>{new Date(date).toDateString()}</TableCell>
            <TableCell>{days}</TableCell>
            <TableCell className="text-right">
              ₹{packagedata.price * person * days}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button className="mt-4 w-full" size={"lg"} onClick={onBooking}>
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z"
              />
            </svg>
          </>
        ) : (
          "Book Now"
        )}
      </Button>
      {packagedata.hotels && (
        <>
          <div className="text-lg font-semibold text-gray-900 my-4">
            Explore Nearby Hotels
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packagedata.hotels.map((p: any, i: any) => {
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
