import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Payment } from "./pages/ Payment";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  );
}
