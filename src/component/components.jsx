import React from "react";
import FirstComponent from "./firstComponent";
import Sidebar from "./sidebar";
import CardHeader from "./cardHeader";

export default function Components() {
  return (
    <>
      <FirstComponent />
      <div className="flex">
      <Sidebar />
      <CardHeader />
      </div>
    </>
  );
}
