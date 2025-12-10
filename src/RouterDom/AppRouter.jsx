import { Route, Routes } from "react-router";
import Cart  from "../Pages/Cart";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};
