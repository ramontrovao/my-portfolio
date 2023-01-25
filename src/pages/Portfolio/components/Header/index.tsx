import { List, Moon, Sun, X } from "phosphor-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import { HeaderContainer } from "./styles";

export function Header() {
  const { changeTheme, theme } = useContext(ThemeContext);
  const [menuState, toggleMenu] = useState(false);

  function handleChangeTheme() {
    changeTheme();
  }

  function handleToggleMenu() {
    toggleMenu(!menuState);
  }

  return (
    <HeaderContainer menuState={menuState}>
      <div>
        <span>
          <strong>Ramon Pinheiro</strong> {"</ >"}
        </span>

        <div className="menu" onClick={handleToggleMenu}>
          {menuState ? <X size={32} /> : <List size={32} />}
        </div>
      </div>

      <nav>
        <a href="#intro">Início</a>
        <a href="#aboutme">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
        <a onClick={handleChangeTheme}>
          {theme === "light" ? <Sun size={25} /> : <Moon size={25} />}
        </a>
      </nav>
    </HeaderContainer>
  );
}
