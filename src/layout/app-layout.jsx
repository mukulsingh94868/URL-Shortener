import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
        <main className="min-h-screen container">
            {/* <header></header> */}
            <Header />
            <Outlet />
        </main>

        <div className="p-10 text-center bg-gray-800 mt-10">
            Made by Mukul Singh
        </div>

        {/* <footer></footer> */}
    </div>
  )
}

export default AppLayout;