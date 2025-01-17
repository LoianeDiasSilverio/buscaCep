import { createContext } from "react";

type IAppContext = {
  isToggleMenuOpen: boolean;
  setToggleMenuOpen: (open: boolean) => void;
};

export const AppContext = createContext<IAppContext>({
  isToggleMenuOpen: false,
  setToggleMenuOpen: (open: boolean) => {},
});
