import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NavManu, StyledHeader } from "./styles";
import Logo from "../../images/logo_grupo_viseu_branco2.png";

type IHeader = {
  isToggleMenuOpen: boolean;
  setToggleMenuOpen: (open: boolean) => void;
};

export const Header = (props: IHeader) => {
  const { isToggleMenuOpen, setToggleMenuOpen } = props;
  console.log(isToggleMenuOpen);
  const handleToggleOpen = () => {
    setToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <StyledHeader>
      <div className="nav_logo">
        <Link to={"/"} className="nav-logo-link">
          <img width={"100%"} src={Logo} alt="Company Logo" className="logo" />
        </Link>
      </div>
      <NavManu isToggleOpen={isToggleMenuOpen}>
        <li>
          <Link to={"/docs"} className="nav-menu-list">
            Documentação
          </Link>
        </li>
      </NavManu>
      <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
    </StyledHeader>
  );
};
