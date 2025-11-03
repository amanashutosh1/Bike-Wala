import React from "react";
import innerStylees from "./innerStylees.module.css";
import { NavLink, useParams } from "react-router-dom";
import useCustomData from "./useCustomData";

const SubServices = () => {
  const { sid, snamedata } = useParams();

  // Main service details (single object)
  const service = useCustomData(`http://localhost:4000/service/${sid}`);

  // Sub services (array of objects)
  const subServices = useCustomData(`http://localhost:4000/subservicename/${snamedata}`);

  return (
    <main>
      <section className={innerStylees.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Show service name safely */}
              <h1>{service?.sname || "Loading..."}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 ${innerStylees.AboutUS}`}>
        <div className="container">
          <div className="row">
            <strong>
              <p className="text-danger text-center">
                {service?.sdesc || "No description available"}
              </p>
            </strong>
          </div>

          <div className="my-3">
            <div className="row">
              {subServices && subServices.length > 0 ? (
                subServices.map((item) => (
                  <div className="col-md-3" key={item._id}>
                    <div className={`${innerStylees.sbx_shadow} mb-4`}>
                      <h5>
                        <NavLink to="">
                          {item.subsname}
                        </NavLink>
                      </h5>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No sub-services available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SubServices;
