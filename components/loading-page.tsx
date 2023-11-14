import React from "react";

export default function LoadingPage() {
  return (
    <div className="bg-pattern fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white">
      <div className="loader" />
    </div>
  );
}
