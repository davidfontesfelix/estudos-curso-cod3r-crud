import "./Nav.scss"
import React from "react"
import NavLinks from "./NavLinks"

export default props =>
    <aside className="menu-area">
      <nav className="menu">
        <NavLinks href="/" icon="home" name="Início"/>
        <NavLinks href="/users" icon="users" name="Usuários"/>
      </nav>
    </aside>