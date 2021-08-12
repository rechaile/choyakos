import React from 'react'
import { Link } from 'react-router-dom'

import android from '../../Images/android-logo-24.png';
import basketball from '../../Images/basketball-regular-24.png';
import home from '../../Images/home-smile-solid-24.png';
import tshirt from '../../Images/t-shirt-solid-24.png';
import heart from '../../Images/heart-solid-24.png';
import bone from '../../Images/bone-solid-24.png';
import joystick from '../../Images/joystick-solid-24.png';

export default function Menu() {
	return (
		<div>
			<Link><button>Electrónica <img src={android} alt=""/></button></Link>
			<Link><button>Deportes <img src={basketball} alt=""/></button></Link>
			<Link><button>Hogar <img src={home} alt=""/></button></Link>
			<Link><button>Moda y complementos <img src={tshirt} alt=""/></button></Link>
			<Link><button>Salud y belleza <img src={heart} alt=""/></button></Link>
			<Link><button>Mascotas <img src={bone} alt=""/></button></Link>
			<Link><button>Gaming <img src={joystick} alt=""/></button></Link>
		</div>
	)
}
