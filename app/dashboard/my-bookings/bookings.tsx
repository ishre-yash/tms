import React from "react";
import MyBookingsCard from "./my-bookings-card";

export default function Bookings({ data }: { data: any }) {
  return (
    <>
      <section className="py-8 px-4 space-y-8">
        <div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            My Bookings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((p: any, i: any) => {
              return <MyBookingsCard key={i} data={p} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
