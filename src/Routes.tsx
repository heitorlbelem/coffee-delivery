import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function Router() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  );
}
