import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="section-slide">
      <div className="wrap-slick1 rs1-slick1">
        <div className="slick1">
          <div className="item-slick1" style={{ backgroundImage: "url(/images/slide-03.jpg)" }}>
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30" style={{ maxWidth: "600px" }}>
                <img src="../pictures/icons/Logo Igralishte final version 1.png" alt="logo-igralishte" />   

                <div className="layer-slick1">
                  <Link href="/NewArrivals">
                    <button className="btn btn-primary btn-large">
                      New arrivals
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
