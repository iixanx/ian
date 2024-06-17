import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./app/main/splash";
import Signin from "./app/auth/signin";
import Signup from "./app/auth/signup";
import Home from "./app/home/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Splash />} path="/" />
        <Route element={<Signin />} path="/signin" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Home />} path="/home" />
      </Routes>
    </BrowserRouter>
  );
}
