import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import $ from "jquery"; // 👈 needed for DataTable
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

const ServiceData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bookservice")
      .then((res) => {
        setData(res.data);

        // Initialize DataTable after data is rendered
        setTimeout(() => {
          if ($.fn.DataTable.isDataTable("#bookService")) {
            $("#bookService").DataTable().destroy(); // cleanup before re-init
          }
          $("#bookService").DataTable();
        }, 0);
      })
      .catch(() => {
        alert("Error fetching Book Service");
      });
  }, []);

  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover id="bookService">
                <thead>
                  <tr>
                    <th>SName</th>
                    <th>SubsName</th>
                    <th>SPName</th>
                    <th>CName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((bookservicedata) => (
                    <tr key={bookservicedata._id}>
                      <td>{bookservicedata.sname}</td>
                      <td>{bookservicedata.subsname}</td>
                      <td>{bookservicedata.spname}</td>
                      <td>{bookservicedata.cname}</td>
                      <td>{bookservicedata.email}</td>
                      <td>{bookservicedata.phone}</td>
                      <td>{bookservicedata.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceData;
