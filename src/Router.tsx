import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./app/main";
import Signin from "./app/auth/signin";
import Index from "./app/main/main";
import Signup from "./app/auth/signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/home" />
        <Route element={<Signin />} path="/signin" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Index />} path="/main" />
      </Routes>
    </BrowserRouter>
  );
}
