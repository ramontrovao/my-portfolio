import { List, Moon, Sun, X } from "phosphor-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import { HeaderContainer } from "./styles";

export function Header() {
  const { changeTheme, theme } = useContext(ThemeContext);
  const [menuState, toggleMenu] = useState(false);

  function handleToggleMenu() {
    toggleMenu(!menuState);
  }

  function handleChangeTheme() {
    changeTheme();
    handleToggleMenu();
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
        <a href="#intro" onClick={handleToggleMenu}>
          Início
        </a>
        <a href="#aboutme" onClick={handleToggleMenu}>
          Sobre mim
        </a>
        <a href="#projects" onClick={handleToggleMenu}>
          Projetos
        </a>
        <a href="#contact" onClick={handleToggleMenu}>
          Contato
        </a>
        <button onClick={handleChangeTheme}>
          {theme === "light" ? <Sun size={25} /> : <Moon size={25} />}
        </button>
      </nav>
    </HeaderContainer>
  );
}
