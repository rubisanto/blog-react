import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    // clean up function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <nav>
        {(toggleMenu || width > 500) && (
          <ul className="liste">
            {/* 5 li with class items "accueil" "service" "contact" */}
            <li className="items">Accueil</li>
            <li className="items">Ecrire</li>
            <li className="items">Contact</li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          BTN
        </button>
      </nav>
    </div>
  );
}
