import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
