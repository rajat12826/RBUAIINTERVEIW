// import { ThemeProvider } from "next-themes";
import React from "react";
import Header from "./_components/Header";

function Dashboardlayout({ children }) {
  return (
    // <ThemeProvider>
    <div id="np">
      {/* <Header/> */}
      <div className="">{children}</div>
    </div>
  );
}

export default Dashboardlayout;
