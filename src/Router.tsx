import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainApp from "./app/main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainApp />} path="/home" />
      </Routes>
    </BrowserRouter>
  );
}
