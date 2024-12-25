// import { ThemeProvider } from "next-themes";
import React from "react";
import Header from "./_components/Header";

function Dashboardlayout({ children }) {
  return (
    // <ThemeProvider>
    <div >
      <Header />
      <div className="mx-5  md:px-20 lg:mx-36">{children}</div>
    </div>
  );
}

export default Dashboardlayout;
