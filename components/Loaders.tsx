import Image from "next/image";
import React from "react";

function Loaders() {
  return (
    <div className="flex-center h-screen w-full">
      Loaders
      <Image
        src="/icons/loading-circle.svg"
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  );
}

export default Loaders;
