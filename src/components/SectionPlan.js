import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import avatarPlacaBox from "../assets/avatar-placa.svg";
import iconMin from "../assets/min.svg";
import iconMax from "../assets/max.svg";
import Cookies from "universal-cookie";

const cookies = new Cookies();
class SectionPlan extends Component {
  componentDidMount() {
    if (!cookies.get('name')) {
      window.location.href = "../";
    }
  }

  cerrarSesion = () => {
    cookies.remove('id', {path: "/"});
    cookies.remove('name', {path: "/"});
    window.location.href = "../";
  }

  render() {
    return (
      <section className="plan">
          <div className="container full-screen">
            <div className="plan__content">
              <div className="plan__content--left">
                <div className="steps hide-for-mobile">
                  <div className="steps__flex">
                    <div className="ellipse">
                      <span className="ellipse--text">1</span>
                    </div>

                    <div className="title reg-16 gray-3">Datos</div>
                  </div>

                  <div className="steps--line">
                    <span className="border"></span>
                  </div>

                  <div className="steps__flex">
                    <div className="ellipse bg-purple">
                      <span className="ellipse--text">2</span>
                    </div>

                    <div className="title reg-16 gray-1">Arma tu plan</div>
                  </div>
                </div>

                <div className="steps hide-for-desktop">
                  <div className="ellipse gray6">
                    <FontAwesomeIcon icon={faChevronLeft} className="ellipse--icon" />
                  </div>

                  <div className="block-flex">
                    <div className="title bold-10 gray-2">PASO 2 DE 2</div>

                    <div className="line-bar purple"></div>
                  </div>
                </div>
              </div>

              <div className="plan__content--right">
                <button type="button" className="steps steps__flex hide-for-mobile" onClick={() => this.cerrarSesion()}>
                  <div className="ellipse bg-red3">
                    <FontAwesomeIcon icon={faChevronLeft} className="ellipse--icon" />
                  </div>

                  <div className="title reg-12 gray-3">VOLVER</div>
                </button>

                <div className="block-title hide-for-mobile">
                  <div className="title reg-40 gray-1">¡Hola, <span className="red">{cookies.get('name')}!</span></div>

                  <div className="paragraph reg-16 gray2">Conoce las coverturas para tu plan</div>
                </div>

                <div className="block__flex">
                  <main className="block__flex--main">
                    <div className="content-placa">
                      <div className="title reg-28 gray-1 hide-for-desktop">Mira las coberturas</div>
                      <div className="paragraph reg-16 gray2 hide-for-desktop">Conoce las coverturas para tu plan</div>

                      <div className="boxPlaca">
                        <img src={avatarPlacaBox} className="boxPlaca--avatar" />

                        <div className="paragraph reg-12 gray3">Placa: <span className="uppercase">c2u-114</span></div>

                        <div className="title reg-20 gray-1 capitalize">wolkswagen 2019 golf</div>
                      </div>
                    </div>

                    <div className="block-flex">
                      <div className="info">
                        <div className="title reg-16 gray-1">Indica la suma asegurada</div>

                        <div className="boxMinMaxText">
                          <div className="title reg-12 gray-2">MIN $12,500</div>
                          <div className="title reg-12 gray-2">MAX $16,500</div>
                        </div>
                      </div>

                      <div className="boxMinMax">
                        <button type="submit" className="boxMinMax--btn">
                          <img src={iconMin} className="icon" />
                        </button>

                        <div className="boxMinMax--input">
                          <span className="doller">$</span>
                          <input type="text" />
                        </div>

                        <button type="submit" className="boxMinMax--btn">
                          <img src={iconMax} className="icon" />
                        </button>
                      </div>
                    </div>

                    <div className="line hide-for-mobile"></div>
                  </main>

                  <aside className="block__flex--aside">
                    <div>
                      <div className="title bold-12 gray-1 hide-for-mobile">MONTO</div>
                      <div className="title reg-28 gray-1">$35.00</div>
                      <div className="paragraph reg-12 gray2 hide-for-mobile">mensuales</div>
                      <div className="paragraph reg-12 gray2 hide-for-desktop">MENSUAL</div>

                      <div className="line hide-for-mobile"></div>

                      <div className="title reg-16 gray-1 hide-for-mobile">El precio incluye:</div>

                      <div className="block-flex hide-for-mobile">
                        <div className="checkDetails">
                          <div className="checkDetails--icon">
                            <FontAwesomeIcon icon={faCheck} className="i" />
                          </div>

                          <div className="paragraph reg14 gray2">Llanta de respuesto</div>
                        </div>

                        <div className="checkDetails">
                          <div className="checkDetails--icon">
                            <FontAwesomeIcon icon={faCheck} className="i" />
                          </div>

                          <div className="paragraph reg14 gray2">Analisis de motor</div>
                        </div>

                        <div className="checkDetails">
                          <div className="checkDetails--icon">
                            <FontAwesomeIcon icon={faCheck} className="i" />
                          </div>

                          <div className="paragraph reg14 gray2">Aros gratis</div>
                        </div>
                      </div>
                    </div>

                    <Link to="/gracias" className="btn red">LO QUIERO</Link>
                  </aside>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default SectionPlan;