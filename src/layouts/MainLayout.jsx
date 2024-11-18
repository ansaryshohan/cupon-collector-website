import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <h1>header</h1>
      <div className="flex-1">
      <Outlet></Outlet>
      </div>
      <h1>footer</h1>
    </div>
  )
}

export default MainLayout