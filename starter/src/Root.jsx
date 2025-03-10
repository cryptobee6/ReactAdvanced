import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
};