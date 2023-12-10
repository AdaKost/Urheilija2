import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListUrheilijat() {
  const [urheilijaData, setUrheilijadata] = useState([]);

  useEffect((urheilijaData) => {
    const fetchData = () => {
      try {
        axios
          .get("http://localhost:3000/urheilijat")
          .then((res) => {
            setUrheilijadata(res.data.urheilijat);
            console.log(res.data.urheilijat);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
    console.log(urheilijaData);
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="mt-2">Urheilijoiden tiedot</h5>
            <div className="d-grid d-md-flex justify-content-md-end mb-3">
              <Link to="/adduser" className="btn btn-warning">
                Lisää urheilija
              </Link>
            </div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Etunimi</th>
                  <th>Sukunimi</th>
                  <th>Paino</th>
                  <th>Laji</th>
                  <th>Syntymävuosi</th>
                  <th>Saavutukset</th>
                </tr>
              </thead>
              <tbody>
                {urheilijaData.map((urheilijaData, id) => (
                  <tr key={id}>
                    <td>{urheilijaData.id} </td>
                    <td>{urheilijaData.etunimi} </td>
                    <td>{urheilijaData.sukunimi} </td>
                    <td>{urheilijaData.paino} </td>
                    <td>{urheilijaData.syntymavuosi} </td>
                    <td>{urheilijaData.saavutukset} </td>
                    <td>
                      <Link
                        to={"/editUrheilija/" + urheilijaData.id}
                        className="btn btn-success mx-2"
                      >
                        Edit
                      </Link>
                      <Link to="/deleteUser" className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListUrheilijat;
