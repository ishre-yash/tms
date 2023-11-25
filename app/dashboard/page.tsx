"use client";
import React from "react";
import { packages } from "@/lib/data/packages";
import PackageCard from "@/components/package-card";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [q, setQ] = React.useState("");
  const [searchdata, setSearchdata] = React.useState(packages);

  const search = () => {
    return packages.filter((p) => {
      if (p.title) {
        return p.title.toLowerCase().includes(q.toLowerCase());
      }
      return false;
    });
  };

  React.useEffect(() => {
    const results = search();
    setSearchdata(results);
  }, [q]);

  return (
    <>
      <section className="py-8 px-4 space-y-8">
        <div>
          <div className="flex flex-col md:flex-row items-center md:justify-between py-4">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
              All Packages
            </h2>
            <Input
              type="email"
              placeholder="Search..."
              className="max-w-sm"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchdata.map((p, i) => {
              return <PackageCard key={i} packagedata={p} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
