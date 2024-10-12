import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
const SharedLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
};
export default SharedLayout;
