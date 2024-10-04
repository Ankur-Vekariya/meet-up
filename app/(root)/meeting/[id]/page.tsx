import React from "react";

function Metting({ params }: { params: { id: string } }) {
  return <div>Metting Room {params.id}</div>;
}

export default Metting;
