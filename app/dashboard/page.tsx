import React from "react";
import { packages } from "@/lib/data/packages";
import PackageCard from "@/components/package-card";

export default function Dashboard() {
  return (
    <>
      <section className="py-8 px-4 space-y-8">
        <div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            Populer Packages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.slice(0, 3).map((p, i) => {
              return <PackageCard key={i} packagedata={p} />;
            })}
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            Recommend Packages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.slice(3, 9).map((p, i) => {
              return <PackageCard key={i} packagedata={p} />;
            })}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            All Packages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((p, i) => {
              return <PackageCard key={i} packagedata={p} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
