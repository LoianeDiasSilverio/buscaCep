import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DocumentacaoScreen } from "../pages/docs";
import { Home } from "../pages/home";
import { Header } from "../components/Header";
import { useState } from "react";
import { AppContext } from "../hook";

const AppRoutes: React.FC = () => {
  const [isToggleMenuOpen, setToggleMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isToggleMenuOpen, setToggleMenuOpen }}>
      <BrowserRouter>
        <Header
          isToggleMenuOpen={isToggleMenuOpen}
          setToggleMenuOpen={setToggleMenuOpen}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocumentacaoScreen />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default AppRoutes;
