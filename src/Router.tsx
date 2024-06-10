import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./app/main";
import Signin from "./app/auth/signin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/home" />
        <Route element={<Signin />} path="/signin" />
      </Routes>
    </BrowserRouter>
  );
}
