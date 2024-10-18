import { Outlet } from "react-router-dom";

export default function authLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
        <img src="../img/logo.svg" alt="" className="max-w-xs mr-9"/>
      <Outlet />
    </main>
  )
}
