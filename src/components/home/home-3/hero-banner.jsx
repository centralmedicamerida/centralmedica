import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <section
        className="hero-area hero-bg"
        style={{ backgroundImage: `url("/assets/img/banner/hero-bg-01.jpg")` }}
      >
        <div className="tpherobg">
          <img src="/assets/img/shape/hero-shape-01.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpherotext">
                <h4 className="tpherotext__title mb-40">
                  Research and <br />
                  Verify physics <br /> laboratory
                </h4>
                <p>
                   Todos los productos de curacion <br /> en Merida Yucatan y el sureste Mexicano.
                </p>
                <div className="tpherotext__btn">
                  <Link href="/contact" className="tp-btn-second">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
