import React from "react";

const Tabpane = ({ item }) => {
  console.log("item", item);
  return <div>{item.children}</div>;
};

export default Tabpane;
