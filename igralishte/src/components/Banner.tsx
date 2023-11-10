import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11">
          <img src={require("../pictures/banner.png")}
            alt="banner picture"
            className="w-100 h-50 position-relative" />
            <Link href="/NewArrivals">
              <button className="btn btn-primary btn-large">
                New arrivals
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Banner;
