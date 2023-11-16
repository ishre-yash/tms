import { CalendarCheck, CalendarDays, IndianRupee, User2 } from "lucide-react";
import React from "react";

export default function MyBookingsCard({ data }: { data: any }) {
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
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <IndianRupee className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {data.packageData.price * data.people * data.noOfDays}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {data.noOfDays}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
