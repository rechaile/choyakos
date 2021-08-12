import React from "react";

import facebook from '../../Images/facebook 36x36.png';
import instagram from '../../Images/instagram 36x36.png';
import twitter from '../../Images/twitter 36x36.png';
import gmail from '../../Images/gmail 36x36.png';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="" alt="" />
          <h6>Choyakos - La comunidad de ofertas en España</h6>
        </div>
        <div>
          <p>
            Choyakos es la comunidad de las compras inteligentes. Nuestra
            comunidad, vota, opina y comparte sus conocimientos y los mejores
            chollos, ofertas, códigos y cupones que encuentra tanto en internet
            como en tiendas físicas. Gracias al criterio de la comunidad,
            encontrarás marcas y productos al mejor precio y con opiniones
            fiables. ¡Ayúdanos formando parte de ella!
          </p>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <h3>Síguenos</h3>
            <div>
              <a href="https://www.facebook.com/chriskenny.padilla/" target="_blank" rel="noreferrer"><img style={{backgroundColor: "red"}} src={facebook} alt=""/></a>
              <a href="https://www.instagram.com/chriskennypadilla/" target="_blank" rel="noreferrer"><img style={{backgroundColor: "red"}} src={instagram} alt=""/></a>
              <a href="#" target="_blank" rel="noreferrer"><img style={{backgroundColor: "red"}} src={twitter} alt=""/></a>
              <a href="#" target="_blank" rel="noreferrer"><img style={{backgroundColor: "red"}} src={gmail} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p> © Christian Baños - ChristianDePaul.es</p>
      </div>
    </footer>
  );
}
