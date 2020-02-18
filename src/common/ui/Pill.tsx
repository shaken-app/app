import React from "react";

interface Pill {
  children: React.ReactChild | string;
}

const Pill = ({ children }: Pill) => {
  return <div>{children}</div>;
};

export default Pill;
