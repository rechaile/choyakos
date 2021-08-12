import React from "react";

//import logo from "../../Images/locochoyakos.png";
import lupa from "../../Images/lupaicono.png";
/* import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twetter.png";
import instagram from "../../Images/Instagram.png"; */

export default function Header() {
  return (
    <header>
      <div>
        <div>
			Logo - Choyakos Ofertas
          {/* <img src={logo} alt="" /> */}
        </div>
        <nav>
          <form action="">
            <input type="search" placeholder="Buscar" />
            <button>
              <img src={lupa} alt="" />
            </button>
          </form>
        </nav>
        <div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/chriskenny.padilla/">{/* <img src={facebook} alt=""/> */}Facebook</a>
          </div>
          <div>
            <a href="#">{/* <img src={twitter} alt=""/> */}Twitter</a>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/chriskennypadilla/">{/* <img src={instagram} alt=""/> */}Instagram</a>
          </div>
        </div>
      </div>
    </header>
  );
}
