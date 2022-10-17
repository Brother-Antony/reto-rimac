import { Link } from "react-router-dom";
import React from "react";
import avatar from "../assets/avatar-gracias.svg";
import imageMobile from "../assets/image-gracias2.svg";

const SectionGracias = () => {
  return (
    <section className="welcome">
      <div className="container full-screen">
        <div className="welcome__content">
            <div className="welcome__content--left">
                <img src={imageMobile} className="img-avatar hide-for-desktop" />

                <div className="block-img">
                    <img src={avatar} />
                </div>
            </div>

            <div className="welcome__content--right">
                <div className="block-info">
                    <div className='title reg-36 gray-1'><span className='red'>¡Te damos la bienvenida!</span> Cuenta con nosotros para proteger tu vehículo</div>

                    <div className="paragraph lig-16">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: <div className="gray1">joel.sanchez@gmail.com</div></div>

                    <div className='block-btn'>
                        <Link to='/' className="btn red">CÓMO USAR MI SEGURO</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGracias;