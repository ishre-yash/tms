import getMyBookings from "@/app/actions/get-my-bookings";
import React from "react";
import Bookings from "./bookings";
import { packages } from "@/lib/data/packages";

export default async function MyBookings() {
  const myBookings = await getMyBookings();

  if (!myBookings) {
    return <div>Server Error</div>;
  }

  if (myBookings?.bookings.length === 0) {
    return <div>no bookings</div>;
  }

  // map out package data to my bookings

  myBookings.bookings = myBookings.bookings.map((b: any) => {
    const packageData = packages.find((p) => p.id === b.packageId);
    return { ...b, packageData };
  });

  console.log(myBookings);

  return <Bookings data={myBookings.bookings} />;
}
