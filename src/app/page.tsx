"use client";
import { useEffect } from "react";
import { AppProvider } from "@/utils/appContext/AppContext";
import HomePage from "@/components/Homepage";
import "@/styles/home.scss";

// const HomePage = dynamic(() => import("../components/Homepage"), {
//   loading: () => <>Loading...</>
// })

export default function Home() {
  
  useEffect(() => {
    // import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </>
    // <div>
    //   <div className="row">
    //     <div className="col-md-1 col-sm-2 col-3 gx-3">Three cols</div>
    //   </div>
    // </div>
  );
}
