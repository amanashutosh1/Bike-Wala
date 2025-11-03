import React from "react";
import innerStylees from "./innerStylees.module.css";
import { NavLink } from "react-router-dom";
import useCustomData from "./useCustomData";

const Services = () => {
  const services = useCustomData("http://localhost:4000/services");

  return (
    <main>
      <section className={innerStylees.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>~Services~</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-4 ${innerStylees.AboutUS}`}>
        <div className="container">
          <div className="row">
            {Array.isArray(services) && services.length > 0 ? (
              services.map((ser) => (
                <div className="col-md-3" key={ser._id}>
                  <div className={`${innerStylees.sbx_shadow} mb-4`}>
                    <h5>
                      <NavLink to={`/subservice/${ser._id}/${ser.sname}`}>
                        {ser.sname}
                      </NavLink>
                    </h5>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No services found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
